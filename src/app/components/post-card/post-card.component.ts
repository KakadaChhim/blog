import {AfterViewInit, Component, Input, OnInit} from "@angular/core";

@Component({
    selector: 'app-post-card',
    template: `
        <div class="max-w-[400px] min-w-[300px] mb-5"
             style="border: none; background-color: white;
                            box-shadow: 0 0 33px -10px rgb(71, 114, 254, 0.3);">
            <img
                    class="mb-1 w-full mx-auto h-[300px]"
                    src="{{postData.data?.postImagePath}}" alt="">
            <div class="bg-white">
                <div class="flex justify-around">
                    <small class="text-red-500">Design</small>
                    <small class="text-green-400">Featured</small>
                    <small class="text-green-700">Views - 1k</small>
                </div>
                <div class="px-3 m-0">
                    <h2 class="m-0" style="margin: 0">{{postData.data?.title}}</h2>
                    <p>
                        {{postData.data?.content}}
                    </p>
                </div>
                <div class="px-3">
                    <small>LAST UPDATE - {{postData.data?.createAt.toMillis() | date }}</small>
                </div>
            </div>
        </div>
    `
})

export class PostCardComponent implements OnInit, AfterViewInit{
    ngAfterViewInit(): void {
        // console.log("post data",this.postData.data?.postImagePath);
    }

    @Input() postData: {data?: {
        postImagePath?: any,
        category?: any,
        content?: any
        createAt?: any,
        excerpt?: any,
        isFeatured?: any,
        permalink: any,
        status: any,
        title: string }} = {};

    ngOnInit(): void {

    }


}