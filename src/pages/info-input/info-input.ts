import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ResultsPage} from '../results/results'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NumberValidator } from '../../validators/number';
import { CalculationsProvider } from "../../providers/calculations/calculations";
import { Storage } from "@ionic/storage";

@IonicPage()

@Component({
  selector: 'page-info-input',
  templateUrl: 'info-input.html',
})

export class InfoInputPage {
  myForm: FormGroup;
  submitAttempt: boolean = false;
  myDate: string;
  gender: string;
  monthlyAtFRA: number;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public formBuilder: FormBuilder,
              public calculations$: CalculationsProvider,
              private storage: Storag
              )
    {
      
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
  }

  logForm() {
    
    this.storage.clear().then((val) => {
      this.storage.set("inputData",  
        {
          pia : this.monthlyAtFRA,
          gender: this.gender,
          dob: this.myDate
        })
    });
    
    console.log(this.myDate);
    console.log(this.gender);
    console.log(this.monthlyAtFRA);
    this.calculations$.monthlyBenefit(this.monthlyAtFRA, this.gender, this.myDate);
    this.navCtrl.push(ResultsPage)
  }

}
