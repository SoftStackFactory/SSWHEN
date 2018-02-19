import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ResultsPage} from '../results/results';
import { Calculations1Provider } from "../../providers/calculations1/calculations1";
import { Storage } from "@ionic/storage";
import { UserDataProvider } from "../../providers/user-data/user-data";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NumberValidator } from '../../validators/number';



@IonicPage()

@Component({
  selector: 'page-info-input',
  templateUrl: 'info-input.html',
})

export class InfoInputPage {
  myForm: FormGroup;
  submitAttempt: boolean = false;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public user$: UserDataProvider, 
              public formBuilder: FormBuilder,
              public calculations1$: Calculations1Provider
              )
    {
      /*this.user$.date = this.myDate;
      this.user$.sex = this.gender;
      this.user$.FRA = this.monthlyAtFRA;*/
      
      this.myForm = formBuilder.group({
        birthDate: ['', Validators.required],
        gender: ['', Validators.required],
        fra: ['', Validators.compose([
          Validators.required, Validators.maxLength(30), NumberValidator.numberValidator
          ]
        )]
      });
  }
  
  onSubmit(){
    this.submitAttempt = true;
    
    if(!this.myForm.valid){
      console.log('Unsuccessful input', this.myForm.value);
    }else{
      console.log('Successful input ', this.myForm.value);
      this.navCtrl.push(ResultsPage);
    }
    this.calculations1$.getBenefitData();
    
  
  }

  /*logForm() {
      console.log(this.myDate);
      console.log(this.gender);
      console.log(this.monthlyAtFRA);
      
  }*/

}
