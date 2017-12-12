import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ResetPassword } from './modal-reset-password';

@NgModule({
  declarations: [
    ResetPassword
  ],
  imports: [
    IonicPageModule.forChild(ResetPassword),
  ],
  exports: [
    ResetPassword
  ]
})
export class ResetPasswordModule {}