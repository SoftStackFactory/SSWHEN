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

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public calculations$: CalculationsProvider,
              private storage: Storage) {}

  logForm() {
    
    // this.storage.clear().then((val) => {
    //   this.storage.set("inputData",  
    //     {
    //       pia : this.calculations$.pia,
    //       gender: this.calculations$.gender,
    //       dob: this.calculations$.dob
    //     })
    // });
    
    this.navCtrl.push(ResultsPage)
  }

}
