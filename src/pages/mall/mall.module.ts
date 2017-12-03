import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MallPage } from './mall';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    MallPage,
  ],
  imports: [
    IonicPageModule.forChild(MallPage),
    PipesModule
  ],
})
export class MallPageModule {}
