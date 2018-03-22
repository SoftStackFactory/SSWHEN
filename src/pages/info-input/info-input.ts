import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import { ResultsPage } from '../results/results';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NumberValidator } from '../../validators/number';
import { UserDataProvider } from "../../providers/user-data/user-data";

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
              public formBuilder: FormBuilder,
              public userData$: UserDataProvider,
              public viewCtrl: ViewController)
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
    } else {
      // Assign to userData$ the form input data. This partially completes userData$
      console.log('Successful form inputs: ', this.myForm.value);
      this.userData$.FRAbenefit = this.myForm.value.fra;
      this.userData$.dateOfBirth = this.myForm.value.birthDate;
      this.userData$.gender = this.myForm.value.gender;
      
      // Send the form input data to Results Page via navCtrl
      this.navCtrl.push(ResultsPage, {
        'myForm': this.myForm.value
      });
    }
    
  }
  
  ionViewDidLoad() {
    this.viewCtrl.setBackButtonText('Back');
  }

}