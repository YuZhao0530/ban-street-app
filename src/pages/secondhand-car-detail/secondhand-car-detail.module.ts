import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SecondhandCarDetailPage } from './secondhand-car-detail';

@NgModule({
  declarations: [
    SecondhandCarDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(SecondhandCarDetailPage),
  ],
})
export class SecondhandCarDetailPageModule {}
