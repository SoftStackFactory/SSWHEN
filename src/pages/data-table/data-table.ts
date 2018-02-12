import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-data-table',
  templateUrl: 'data-table.html',
})
export class DataTablePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  //mock data array for testing
  
  benefitData: any[] = [
      {
        age: 62,
        monthly: 1000,
        cumulative: 10000
      },
      {
        age:63, 
        monthly: 2000,
        cumulative: 20000
      },
      {
        age: 64,
        monthly: 3000,
        cumulative: 30000
      }
    ]

  ionViewDidLoad() {
    console.log('ionViewDidLoad DataTablePage');
  }

}
