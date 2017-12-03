import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SecondhandGoodsDetailPage } from './secondhand-goods-detail';

@NgModule({
  declarations: [
    SecondhandGoodsDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(SecondhandGoodsDetailPage),
  ],
})
export class SecondhandGoodsDetailPageModule {}
