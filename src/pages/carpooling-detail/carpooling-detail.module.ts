import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarpoolingDetailPage } from './carpooling-detail';

@NgModule({
  declarations: [
    CarpoolingDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(CarpoolingDetailPage),
  ],
})
export class CarpoolingDetailPageModule {}
