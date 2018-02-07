import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ResultsPage} from '../results/results'
import { ComputationsProvider } from "../../providers/computations/computations";

@IonicPage()

@Component({
  selector: 'page-info-input',
  templateUrl: 'info-input.html',
})

export class InfoInputPage {
  myDate: string;
  gender: string;
  monthlyAtFRA: number;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public comp$: ComputationsProvider) {
  }

  logForm() {
      console.log(this.myDate);
      console.log(this.gender);
      console.log(this.monthlyAtFRA);
      this.comp$.monthlyBenefit(this.monthlyAtFRA, this.gender, this.myDate);
      this.navCtrl.push(ResultsPage)
  }

}


  //may need later, converts date in YYYY-MM format to # of months
  
  // convertToMonths() {
  //   let dateString: string = this.myDate;
  //   let yearString: any = dateString.substr(0,4);
  //   let monthString: any = dateString.substr(5,6);
  //   this.dateInMonths = (Number(yearString)*12) + Number(monthString);
  //   console.log(this.dateInMonths, "hit");
  // }
