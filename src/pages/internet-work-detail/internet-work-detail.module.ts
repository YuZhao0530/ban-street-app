import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InternetWorkDetailPage } from './internet-work-detail';

@NgModule({
  declarations: [
    InternetWorkDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(InternetWorkDetailPage),
  ],
})
export class InternetWorkDetailPageModule {}
