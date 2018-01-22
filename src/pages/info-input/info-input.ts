import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import {ResultsPage} from '../results/results'
import { UserDataProvider } from "../../providers/user-data/user-data";

@IonicPage()
@Component({
  selector: 'page-info-input',
  templateUrl: 'info-input.html',
})

export class InfoInputPage {
  results: any;
  myDate: string;
  gender: string;
  monthlyAt62: number;
  monthlyAtFRA: number;
  monthlyAt70: number;

  constructor(public user$: UserDataProvider) {
    this.results = ResultsPage;
    this.user$.date = this.myDate;
    this.user$.sex = this.gender;
    this.user$.start = this.monthlyAt62;
    this.user$.FRA = this.monthlyAtFRA;
    this.user$.end = this.monthlyAt70;
  }

  logForm() {
      console.log(this.myDate);
      console.log(this.gender);
      console.log(this.monthlyAt62);
      console.log(this.monthlyAtFRA);
      console.log(this.monthlyAt70);
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
//     this.user$.start
//   }

// }

//Then in the html, interpolation gives {{user$.start}}
