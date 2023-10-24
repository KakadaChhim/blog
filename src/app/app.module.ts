import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatListModule} from "@angular/material/list";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatTableModule} from "@angular/material/table";
import {MatBadgeModule} from "@angular/material/badge";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatRadioModule} from "@angular/material/radio";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HeaderComponent} from "./components/header/header.component";
import {CategoryNavbarComponent} from "./components/category-navbar/category-navbar.component";
import {HomeComponent} from "./page/home/home.component";
import {SingleCategoryComponent} from "./page/single-category/single-category.component";
import {SinglePostComponent} from "./page/single-post/single-post.component";
import {TermsAndConditionComponent} from "./page/terms-and-condition/terms-and-condition.component";
import {ContactUsComponent} from "./page/contact-us/contact-us.component";
import {SubscriptionFormComponent} from "./subscription-form/subscription-form.component";
import {CommentFormComponent} from "./comments/comment-form/comment-form.component";
import {CommentListComponent} from "./comments/comment-list/comment-list.component";
import {AboutUsComponent} from "./page/about-us/about-us.component";
import {FooterComponent} from "./components/footer/footer.component";
import {PostCardComponent} from "./components/post-card/post-card.component";
import {MatInputModule} from "@angular/material/input";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {AngularFireModule} from "@angular/fire/compat";
import {getFirestore, provideFirestore} from "@angular/fire/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDm72R-TE68Do2agAyZ2dicQEByA7T-WzA",
  authDomain: "ang-blog-4a279.firebaseapp.com",
  projectId: "ang-blog-4a279",
  storageBucket: "ang-blog-4a279.appspot.com",
  messagingSenderId: "493534911624",
  appId: "1:493534911624:web:c25a4cc19c920f08e6133d"
};
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryNavbarComponent,
    HomeComponent,
    SingleCategoryComponent,
    SinglePostComponent,
    TermsAndConditionComponent,
    ContactUsComponent,
    SubscriptionFormComponent,
    CommentFormComponent,
    CommentListComponent,
    AboutUsComponent,
    FooterComponent,
    PostCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(firebaseConfig),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
