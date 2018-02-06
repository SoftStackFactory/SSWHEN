import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ResultsPage } from '../results/results'
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
  
  //may need later, converts date in YYYY-MM format to # of months
  
  // convertToMonths() {
  //   let dateString: string = this.myDate;
  //   let yearString: any = dateString.substr(0,4);
  //   let monthString: any = dateString.substr(5,6);
  //   this.dateInMonths = (Number(yearString)*12) + Number(monthString);
  //   console.log(this.dateInMonths, "hit");
  // }
  
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public bene$: BenefitProvider) {

  }

  logForm() {
    
    this.bene$.monthlyBenefit(this.monthlyAtFRA, this.gender, this.myDate);
    
    this.navCtrl.push(ResultsPage);
      
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
