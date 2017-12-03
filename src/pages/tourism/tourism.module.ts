import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TourismPage } from './tourism';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    TourismPage,
  ],
  imports: [
    IonicPageModule.forChild(TourismPage),
    PipesModule
  ],
})
export class TourismPageModule {}
