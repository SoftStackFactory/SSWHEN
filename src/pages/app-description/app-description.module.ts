import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AppDescriptionPage } from './app-description';

@NgModule({
  declarations: [
    AppDescriptionPage,
  ],
  imports: [
    IonicPageModule.forChild(AppDescriptionPage),
  ],
})
export class AppDescriptionPageModule {}
