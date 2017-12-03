import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SecondhandGoodsPage } from './secondhand-goods';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    SecondhandGoodsPage,
  ],
  imports: [
    IonicPageModule.forChild(SecondhandGoodsPage),
    PipesModule
  ],
})
export class SecondhandGoodsPageModule {}
