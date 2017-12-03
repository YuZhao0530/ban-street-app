import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TourismDetailPage } from './tourism-detail';

@NgModule({
  declarations: [
    TourismDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(TourismDetailPage),
  ],
})
export class TourismDetailPageModule {}
