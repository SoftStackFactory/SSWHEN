import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterPage } from './register';

import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterPage),
    ReactiveFormsModule
  ],
})
export class RegisterPageModule {}
