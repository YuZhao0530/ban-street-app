import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PublishHousekeepingPage } from './publish-housekeeping';

@NgModule({
  declarations: [
    PublishHousekeepingPage,
  ],
  imports: [
    IonicPageModule.forChild(PublishHousekeepingPage),
  ],
})
export class PublishHousekeepingPageModule {}
