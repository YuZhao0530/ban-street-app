import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarpoolingPage } from './carpooling';

@NgModule({
  declarations: [
    CarpoolingPage,
  ],
  imports: [
    IonicPageModule.forChild(CarpoolingPage),
  ],
})
export class CarpoolingPageModule {}
