import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConvenienceInfoPage } from './convenience-info';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    ConvenienceInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(ConvenienceInfoPage),
    PipesModule
  ],
})
export class ConvenienceInfoPageModule {}
