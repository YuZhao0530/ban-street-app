import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PublishListPage } from './publish-list';

@NgModule({
  declarations: [
    PublishListPage,
  ],
  imports: [
    IonicPageModule.forChild(PublishListPage),
  ],
})
export class PublishListPageModule {}
