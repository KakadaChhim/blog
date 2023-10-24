import {Component, OnInit} from "@angular/core";
import {CategoryService} from "../../service/category/category.service";

@Component({
    selector: 'app-category-navbar',
    template: `
        <mat-toolbar
                style="background-color: var(--navbar-footer-text); color: var(--body-text-color);"
                class="w-full mx-auto border-0 fixed top-[60px] z-10 p-[10px] h-[60px] justify-center">
            <button mat-button *ngFor="let category of categoryArray">
                <a routerLink="">{{category.data.category}}</a>
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

export class CategoryNavbarComponent implements OnInit{

    categoryArray: any;
    constructor(private categoryService: CategoryService) {
    }

    ngOnInit(): void {
        this.categoryService.loadData().subscribe( (value) => {
            this.categoryArray = value;
            console.log(this.categoryArray)
        });
    }

}