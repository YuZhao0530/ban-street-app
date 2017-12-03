import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HousekeepingPage } from './housekeeping';

@NgModule({
  declarations: [
    HousekeepingPage,
  ],
  imports: [
    IonicPageModule.forChild(HousekeepingPage),
  ],
})
export class HousekeepingPageModule {}
