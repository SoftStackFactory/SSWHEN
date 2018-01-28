import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmailModalPage } from './email-modal';

@NgModule({
  declarations: [
    EmailModalPage,
  ],
  imports: [
    IonicPageModule.forChild(EmailModalPage),
  ],
})
export class EmailModalPageModule {}
