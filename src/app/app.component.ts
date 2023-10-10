import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <app-header></app-header>
    </div>
    <app-category-navbar></app-category-navbar>
    <div style="margin: 150px 0 50px 0; min-height: 45vh;">
      <router-outlet></router-outlet>
    </div>
    <app-subscription-form></app-subscription-form>
    <div>
      <app-footer></app-footer>
    </div>
    
  `
})
export class AppComponent {

}
