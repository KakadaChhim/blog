import {Component} from "@angular/core";

@Component({
    selector: 'app-category-navbar',
    template: `
        <mat-toolbar
                style="background-color: var(--navbar-footer-text); color: var(--body-text-color);"
                class="w-full mx-auto border-0 fixed top-[60px] z-10 p-[10px] h-[60px] justify-center">
            <button mat-button>
                <a routerLink="">Design</a>
            </button>
            <button mat-button>
                <a routerLink="">Inspiration</a>
            </button>
            <button mat-button>
                <a routerLink="">Sport</a>
            </button>
            <button mat-button>
                <a routerLink="">Politic</a>
            </button>
        </mat-toolbar>
    `,
    styles: [
        `
          button a{
            text-transform: uppercase;
          }
        `
    ]
})

export class CategoryNavbarComponent{
    
}