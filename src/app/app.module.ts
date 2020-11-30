import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsCartComponent } from './products-cart/products-cart.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { ProductsHomeComponent } from './products-home/products-home.component';
import { StoreAboutComponent } from './store-about/store-about.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductsCartComponent,
    InputIntegerComponent,
    ProductsHomeComponent,
    StoreAboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
