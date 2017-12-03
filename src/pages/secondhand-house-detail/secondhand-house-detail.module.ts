import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SecondhandHouseDetailPage } from './secondhand-house-detail';

@NgModule({
  declarations: [
    SecondhandHouseDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(SecondhandHouseDetailPage),
  ],
})
export class SecondhandHouseDetailPageModule {}
