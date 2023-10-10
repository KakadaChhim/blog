import {Component} from "@angular/core";

@Component({
    selector: 'app-comment-list',
    template: `
        <div class="container">
            <div class="p-5">
                <div>
                    <h2>Comments (25)</h2>
                </div>
                <div class="border-b-2">
                    <div class="mt-2">
                        <h4>John</h4>
                        <p class="text-red-500">Last update SEP 23, 2023</p>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </p>
                    </div>
                    <div>
                        <button mat-button>
                            <a class="text-blue-700">REPLY</a>
                        </button>
                        <button mat-button>
                            <a class="text-blue-700">VIEW REPLY</a>
                        </button>
                    </div>
                </div>

                <div class="border-b-2">
                    <div class="mt-2">
                        <h4>John</h4>
                        <p class="text-red-500">Last update SEP 23, 2023</p>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </p>
                    </div>
                    <div>
                        <button mat-button>
                            <a class="text-blue-700">REPLY</a>
                        </button>
                        <button mat-button>
                            <a class="text-blue-700">VIEW REPLY</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `,
    styles: [
        `
          .container{
            background-color: white;
            border: none;
            box-shadow: 0 0 33px -10px rgb(71, 114, 254, 0.3);
          }
          h2,h4{
            margin-bottom: 10px;
          }
        `
    ]
})

export class CommentListComponent{

}