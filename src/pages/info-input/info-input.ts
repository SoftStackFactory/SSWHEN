import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ResultsPage} from '../results/results';
import { CalculationsProvider } from "../../providers/calculations/calculations";
import { Storage } from "@ionic/storage";

@IonicPage()

@Component({
  selector: 'page-info-input',
  templateUrl: 'info-input.html',
})

export class InfoInputPage {
  myDate: string;
  gender: string;
  monthlyAtFRA: number;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public calculations$: CalculationsProvider,
              private storage: Storage) {}

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
