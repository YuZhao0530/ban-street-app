import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HousekeepingListPage } from './housekeeping-list';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    HousekeepingListPage,
  ],
  imports: [
    IonicPageModule.forChild(HousekeepingListPage),
    PipesModule
  ],
})
export class HousekeepingListPageModule {}
