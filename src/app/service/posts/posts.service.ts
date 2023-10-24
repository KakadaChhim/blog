import {Injectable} from "@angular/core";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {map} from "rxjs";

@Injectable({
    providedIn: "root"
})
export class PostsService{
    constructor(private angularFirestore: AngularFirestore) {
    }
    loadFeature(){
        return this.angularFirestore.collection('posts',
                ref => ref.where('isFeatured', '==', true).limit(4))
            .snapshotChanges().pipe(
            map(action =>{
                return action.map(a =>{
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    return {id, data};
                })
            })
        )
    }

    loadLatest(){
        return this.angularFirestore.collection('posts',
            ref => ref.orderBy('createAt'))
            .snapshotChanges().pipe(
            map(action =>{
                return action.map(a =>{
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    return {id, data};
                })
            })
        )
    }
}