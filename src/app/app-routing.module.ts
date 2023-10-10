import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./page/home/home.component";
import {SingleCategoryComponent} from "./page/single-category/single-category.component";
import {SinglePostComponent} from "./page/single-post/single-post.component";
import {TermsAndConditionComponent} from "./page/terms-and-condition/terms-and-condition.component";
import {ContactUsComponent} from "./page/contact-us/contact-us.component";
import {AboutUsComponent} from "./page/about-us/about-us.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'category', component:SingleCategoryComponent},
  {path: 'post', component: SinglePostComponent},

  {path: 'about', component: AboutUsComponent},
  {path: 'term-conditions', component: TermsAndConditionComponent},
  {path: 'contact', component: ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
