import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {TopBarComponent} from './top-bar/top-bar.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductAlertsComponent} from './product-alerts/product-alerts.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {CartComponent} from './cart/cart.component';
import {HttpClientModule} from "@angular/common/http";
import {ShippingComponent} from './shipping/shipping.component';
import {AboutComponent} from "./about/about.component";
import {TodoListComponent} from './todo-list/todo-list.component';
import {AlertsComponent} from './alerts/alerts.component';
import {ServerComponent} from './server/server.component';
import {ShoppingComponent} from './shopping/shopping.component';
import {RecipeBookComponent} from './recipe-book/recipe-book.component';
import {RecipeListComponent} from './recipe-book/recipe-list/recipe-list.component';
import {RecipeDetailComponent} from './recipe-book/recipe-detail/recipe-detail.component';
import {RecipeItemComponent} from './recipe-book/recipe-item/recipe-item.component';
import {ShoppingEditComponent} from './shopping/shopping-edit/shopping-edit.component';
import {ShoppingAndRecipeComponent} from './shopping-and-recipe/shopping-and-recipe.component';
import {BoxComponent} from "./alerts/box/box.component";

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            {path: '', component: ProductListComponent},
            {path: 'products/:productId', component: ProductDetailsComponent},
            {path: 'cart', component: CartComponent},
            {path: 'shipping', component: ShippingComponent},
            {path: 'about', component: AboutComponent},
            {path: 'todo', component: TodoListComponent},
            {path: 'alerts', component: AlertsComponent},
            {path: 'server', component: ServerComponent},
            {path: 'shopping-and-recipes', component: ShoppingAndRecipeComponent},
        ]),
        FormsModule
    ],
    declarations: [
        AppComponent,
        TopBarComponent,
        ProductListComponent,
        ProductAlertsComponent,
        ProductDetailsComponent,
        CartComponent,
        ShippingComponent,
        AboutComponent,
        TodoListComponent,
        AlertsComponent,
        ServerComponent,
        ShoppingComponent,
        RecipeBookComponent,
        RecipeListComponent,
        RecipeDetailComponent,
        RecipeItemComponent,
        ShoppingEditComponent,
        ShoppingAndRecipeComponent,
        BoxComponent,
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/