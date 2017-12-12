import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AppInformationPage } from './app-information';

@NgModule({
  declarations: [
    AppInformationPage,
  ],
  imports: [
    IonicPageModule.forChild(AppInformationPage),
  ],
})
export class AppInformationPageModule {}
