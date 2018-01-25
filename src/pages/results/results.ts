import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserDataProvider } from "../../providers/user-data/user-data";



@IonicPage()
@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage implements OnInit{

  constructor(public navCtrl: NavController, public navParams: NavParams, public user$: UserDataProvider) {
  }

  ngOnInit(){}

}

