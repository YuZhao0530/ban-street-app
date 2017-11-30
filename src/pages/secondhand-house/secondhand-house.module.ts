import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SecondhandHousePage } from './secondhand-house';
import { PipesModule } from '../../pipes/pipes.module'

@NgModule({
  declarations: [
    SecondhandHousePage,
  ],
  imports: [
    IonicPageModule.forChild(SecondhandHousePage),
    PipesModule
  ],
})
export class SecondhandHousePageModule {}
