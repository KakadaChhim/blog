import {Component} from "@angular/core";

@Component({
    selector: 'app-subscription-form',
    template: `
        <div class="w-full  justify-center my-8">
            <div class="w-full text-center">
                <h2 class="uppercase">Subscription Form</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            </div>
            <div class="w-full flex justify-center">
                <form action="">
                    <div class="inline-flex flex-row">
                        <div class="mx-2">
                            <input type="text" name="name" id="name"
                                   class=" rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                           focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Name">
                        </div>
                        <div class="mx-2">
                            <input type="email" name="email" id="email"
                                   class=" rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                           focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="example@gmail.com">
                        </div>
                        <div class="mx-2">
                            <button mat-raised-button color="accent" style="background-color: var(--primary-color)">
                                <a routerLink="" style="color:#000;">Blog Learning</a>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    `
})

export class SubscriptionFormComponent{

}