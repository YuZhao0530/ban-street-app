import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PublishMallGoodsPage } from './publish-mall-goods';

@NgModule({
  declarations: [
    PublishMallGoodsPage,
  ],
  imports: [
    IonicPageModule.forChild(PublishMallGoodsPage),
  ],
})
export class PublishMallGoodsPageModule {}
