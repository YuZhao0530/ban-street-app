import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MallDetailPage } from './mall-detail';

@NgModule({
  declarations: [
    MallDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(MallDetailPage),
  ],
})
export class MallDetailPageModule {}
