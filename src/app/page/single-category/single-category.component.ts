import {Component} from "@angular/core";

@Component({
    selector: 'app-single-category',
    template: `
        <div class="w-full text-center p-5" style="background-color: var(--primary-color);">
            <h2 class="uppercase text-white">General Knowledge</h2>
            <p class="text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        </div>
        <div class="container">
            <div class="w-full">
                <div class="container grid-cols-4">
                    <app-post-card></app-post-card>
                </div>
                <div class="container grid-cols-4">
                    <app-post-card></app-post-card>
                </div>
            </div>
        </div>
    `
})

export class SingleCategoryComponent {

}