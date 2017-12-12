import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { Tri } from './modal-tri';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    Tri
  ],
  imports: [
    IonicPageModule.forChild(Tri),
    PipesModule
  ],
  exports: [
    Tri
  ]
})
export class TriModule {}