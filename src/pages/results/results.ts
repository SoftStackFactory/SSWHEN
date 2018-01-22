import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage {
  
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.results = "graph";
    
  //   var results[] = [
  //   { age: 62, monthlyPayout: 1000 },
  //   { age: 63, monthlyPayout: 1000 },
  //   { age: 64, monthlyPayout: 1000 },
  //   { age: 65, monthlyPayout: 1000 },
  //   { age: 66, monthlyPayout: 1000 },
  //   { age: 67, monthlyPayout: 1000 },
  //   { age: 68, monthlyPayout: 1000 },
  //   { age: 69, monthlyPayout: 1000 },
  //   { age: 70, monthlyPayout: 1000 }
  //   ];
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultsPage');
  }

}
