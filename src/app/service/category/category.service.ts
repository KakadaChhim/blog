import {Injectable} from "@angular/core";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {map} from "rxjs";

@Injectable({
    providedIn: "root"
})
export class CategoryService{
    constructor(private angularFireStore: AngularFirestore) {
    }

    loadData(){
        return this.angularFireStore.collection('categories').snapshotChanges().pipe(
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