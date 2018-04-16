import {Component, OnInit} from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { CalculationsProvider } from '../../providers/calculations/calculations';
import { MockDataProvider } from '../../providers/mock-data/mock-data';

@Component({
  selector: 'modal-dashboard',
  templateUrl: 'modal-dashboard.html'
})

export class ModalDashboardComponent implements OnInit{
    chartType: string;
    retYears: any[] = [];
    tableMonthly: any[] = [];
    tableAccumulated: any[] = [];
    leftTitle: string = "Retirement Age";
    rightTitleMonthly: string = "Monthly Payout";
    rightTitleCumulative: string = "Cumulative Payout";
    results: any;
    
  constructor(public navParams: NavParams, 
    public viewCtrl: ViewController, 
    public calculations$: CalculationsProvider,
    public mock$: MockDataProvider) {
      this.chartType = this.navParams.get('modalType');
      this.retYears = this.navParams.get('retYears');
      this.tableMonthly = this.navParams.get('tableMonthly');
      this.tableAccumulated = this.navParams.get('tableAccumulated');
  }
  
  ngOnInit() {
    console.log(this.chartType);
    console.log(this.retYears);
    console.log(this.tableMonthly);
    console.log(this.tableAccumulated);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
