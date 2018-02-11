import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InfoInputPage } from "../info-input/info-input";

@IonicPage()
@Component({
  selector: 'page-data-table',
  templateUrl: 'data-table.html',
})
export class DataTablePage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    ){}
    
    
    @Input() benefitData: any [] = [];
    
    
  ionViewDidLoad() {
    console.log('ionViewDidLoad DataTablePage');
    
  }

}
