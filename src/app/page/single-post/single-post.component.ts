import {Component} from "@angular/core";

@Component({
    selector: 'app-single-post',
    template: `
        <div class="container mx-auto px-[200px]">
            <div class="grid grid-cols-3 gap-4">
                <div class="col-span-2">
                    <div class="w-full" style="background-color: white; border: none; box-shadow: 0 0 33px -10px rgb(71, 114, 254, 0.3);">
                        <img class="w-full" src="https://via.placeholder.com/150" alt="">
                        <div class="px-3 pb-3">
                            <small class="text-red-500 ml-2">Design</small>
                            <small class="text-green-400 ml-2">Featured</small>
                            <small class="text-green-700 ml-2">Views - 1k</small>
                            <small class="ml-2">LAST UPDATE - SEP 20, 2023</small>
                            <h2 class="m-0 text-sm" style="margin: 0">How to start a blog in 2023</h2>
                            <p class="text-justify">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                It has survived not only five centuries, but also the leap into electronic typesetting, 
                                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                                sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                                Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                    </div>
                    <div class="mt-5">
                        <app-comment-form></app-comment-form>
                    </div>
                    <div class="mt-5">
                        <app-comment-list></app-comment-list>
                    </div>
                </div>
                <div class="col-span-1">
                    <div class="flex flex-row">
                        <app-post-card></app-post-card>
                    </div>
                </div>
            </div>
        </div>
    `
})

export class SinglePostComponent {

}