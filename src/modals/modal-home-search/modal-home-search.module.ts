import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { HomeSearch } from './modal-home-search';

@NgModule({
  declarations: [
    HomeSearch
  ],
  imports: [
    IonicPageModule.forChild(HomeSearch),
  ],
  exports: [
    HomeSearch
  ]
})
export class ProductsModule {}