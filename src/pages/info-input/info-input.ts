import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ResultsPage } from '../results/results'
import { UserDataProvider } from "../../providers/user-data/user-data";
import { BenefitProvider } from "../../providers/benefit/benefit";
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
    public bene$: BenefitProvider,
    private storage: Storage) {

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

    this.navCtrl.push(ResultsPage);
      
  }
}


