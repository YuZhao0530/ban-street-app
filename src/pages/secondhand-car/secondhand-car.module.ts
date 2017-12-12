import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SecondhandCarPage } from './secondhand-car';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    SecondhandCarPage,
  ],
  imports: [
    IonicPageModule.forChild(SecondhandCarPage),
    PipesModule
  ],
})
export class SecondhandCarPageModule {}
