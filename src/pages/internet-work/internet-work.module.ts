import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InternetWorkPage } from './internet-work';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    InternetWorkPage,
  ],
  imports: [
    IonicPageModule.forChild(InternetWorkPage),
    PipesModule
  ],
})
export class InternetWorkPageModule {}
