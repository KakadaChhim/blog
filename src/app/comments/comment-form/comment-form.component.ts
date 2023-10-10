import {Component} from "@angular/core";

@Component({
    selector: 'app-comment-form',
    template: `
        <div class="container">
            <div class="p-5">
                <h2>Leave a Comment</h2>
                <p>you cam leave a comment using this comment form.</p>
            </div>
            <div class="p-2">
                <form action="">
                    <div class="mx-2">
                        <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Name</label>
                        <input type="text" name="name" id="name"
                               class="block w-full border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                           focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                               placeholder="Name">
                    </div>
                    <div class="mx-2">
                        <label for="comment" class="block text-sm font-medium leading-6 text-gray-900">Comment</label>
                        <textarea name="Comment" id="Comment" rows="4" cols="50"
                                  class="block w-full border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                           focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  placeholder="Add your comment here"> </textarea>
                    </div>
                    <div class="mt-3 mx-2">
                        <button mat-raised-button color="accent" style="background-color: var(--primary-color)">
                            <a routerLink="" style="color:#000;">Add Comment</a>
                        </button>
                    </div>
                </form>
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
        `
    ]
})

export class CommentFormComponent{

}