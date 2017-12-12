import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { NewAccount } from './modal-new-account';

@NgModule({
  declarations: [
    NewAccount
  ],
  imports: [
    IonicPageModule.forChild(NewAccount),
  ],
  exports: [
    NewAccount
  ]
})
export class NewAccountModule {}