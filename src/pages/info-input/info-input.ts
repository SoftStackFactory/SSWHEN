import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ResultsPage } from '../results/results'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NumberValidator } from '../../validators/number';
import { CalculationsProvider } from "../../providers/calculations/calculations";
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
              public calculations$: CalculationsProvider,
              public userData$: UserDataProvider
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
    } else {
      console.log('Successful input ', this.myForm.value);
      this.userData$.FRAbenefit = this.myForm.value.fra;
      this.userData$.dateOfBirth = this.myForm.value.birthDate;
      this.userData$.gender = this.myForm.value.gender;
      
    this.calculations$.pia = this.myForm.value.fra
    this.calculations$.gender = this.myForm.value.gender
    this.calculations$.dob = this.myForm.value.birthDate
    this.calculations$.getBenefitData();
      
      this.navCtrl.push(ResultsPage, {
        'myForm': this.myForm.value
      });
    }
    
    //  ???
    // How can calculations$.getBenefitData() without its {pia, gender, and dob} first being assigned 
    // {this.myForm.value.fra, this.myForm.value.gender, this.myForm.value.birthDate}  
    // this.calculations$.pia = this.myForm.value.fra
    // this.calculations$.gender = this.myForm.value.gender
    // this.calculations$.dob = this.myForm.value.birthDate
    // this.calculations$.getBenefitData();
    
    // ?? why does calculations$ line 10; console.log('Hello CalculationsProvider Provider'); fire
    // upon enering the info-input page? It should fire after the submit button is clicked, not upon page load
  }

}
