import {Component} from "@angular/core";

@Component({
    selector: 'app-home',
    template: `
        <section class="px-[130px] pb-[130px]"style="background-color: var(--primary-color)">
            <div class="container">
                <div class="w-full">
                    <div class="columns-12 text-center mt-5 flex flex-col">
                        <h2 class="text-white">Featured Posts</h2>
                        <p class="text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
                <div class="w-full">
                    <div class="w-full">
                        <app-post-card class="grid grid-cols-4 gap-4"></app-post-card>
                    </div>
                </div>
            </div>
        </section>
        
        <section class="container mt-5">
            <div class="w-full text-center">
                <h2>Latest Posts</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div class="w-full  px-[50px]">
                    <app-post-card class="grid grid-cols-4 gap-4"></app-post-card>
            </div>
        </section>
    `
})

export class HomeComponent{

}