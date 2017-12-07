import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarpoolingPage } from './carpooling';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    CarpoolingPage,
  ],
  imports: [
    IonicPageModule.forChild(CarpoolingPage),
    PipesModule
  ],
})
export class CarpoolingPageModule {}
