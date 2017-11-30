import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SecondhandHousePage } from './secondhand-house';

@NgModule({
  declarations: [
    SecondhandHousePage,
  ],
  imports: [
    IonicPageModule.forChild(SecondhandHousePage),
  ],
})
export class SecondhandHousePageModule {}
