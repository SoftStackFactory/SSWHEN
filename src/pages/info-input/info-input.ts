import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ResultsPage} from '../results/results'
import { UserDataProvider } from "../../providers/user-data/user-data";

@IonicPage()

@Component({
  selector: 'page-info-input',
  templateUrl: 'info-input.html',
})

export class InfoInputPage {
  myDate: string;
  gender: string;
  monthlyAtFRA: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public user$: UserDataProvider) {
    this.user$.date = this.myDate;
    this.user$.sex = this.gender;
    this.user$.FRA = this.monthlyAtFRA;
  }

  logForm() {
      console.log(this.myDate);
      console.log(this.gender);
      console.log(this.monthlyAtFRA);
      this.navCtrl.push(ResultsPage)
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
