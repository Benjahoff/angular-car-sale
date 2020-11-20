import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarListComponent } from './car-list/car-list.component';

import { FormsModule } from '@angular/forms';
import { StoreAboutComponent } from './store-about/store-about.component';
import { PruductsComponent } from './pruducts/pruducts.component';

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    StoreAboutComponent,
    PruductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
