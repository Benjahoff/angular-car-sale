import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PruductsComponent } from './pruducts/pruducts.component';
import { StoreAboutComponent } from './store-about/store-about.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'articles',
    pathMatch: 'full'
  },
  {
    path: 'articles',
    component: PruductsComponent
  },
  {
    path: 'about',
    component: StoreAboutComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
