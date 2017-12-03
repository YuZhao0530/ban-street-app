import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HousekeepingDetailPage } from './housekeeping-detail';

@NgModule({
  declarations: [
    HousekeepingDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(HousekeepingDetailPage),
  ],
})
export class HousekeepingDetailPageModule {}
