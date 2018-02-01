import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ResultsPage} from '../results/results'
import { UserDataProvider } from "../../providers/user-data/user-data";
import { BenefitProvider } from "../../providers/benefit/benefit";

@IonicPage()

@Component({
  selector: 'page-info-input',
  templateUrl: 'info-input.html',
})

export class InfoInputPage {
  myDate: string;
  gender: string;
  monthlyAtFRA: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public bene$: BenefitProvider) {
    this.bene$.dob = this.myDate;
    this.bene$.gender = this.gender;
    this.bene$.pia = this.monthlyAtFRA;
  }

  logForm() {
      console.log(this.myDate);
      console.log(this.gender);
      console.log(this.monthlyAtFRA);
      console.log(this.bene$.monthlyBenefit(this.monthlyAtFRA));
      // this.navCtrl.push(ResultsPage, {
      //   data: this.monthlyAtFRA
      
      // })
  }

}


// Recommendation for resultsPage
// Import the Pages you want to communicate with;
// import {InfoInputPage} from '../info-input/info-input';
// Import the service which has the data;
// import { UserDataProvider } from "../../providers/user-data/user-data";
// .
// .
// .
// export class ResultsPage implements OnInit {

//   constructor( public user$: UserDataProvider ) {}
  
//   ngOnInit(){
//     this.user$.FRA
//   }

// }

//Then in the html, interpolation gives {{user$.start}}
