import {Component, OnInit} from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { CalculationsProvider } from '../../providers/calculations/calculations';
import { MockDataProvider } from '../../providers/mock-data/mock-data';


@Component({
  selector: 'modal-dashboard',
  templateUrl: 'modal-dashboard.html'
})

export class ModalDashboardComponent implements OnInit{
    retYears: any[] = [];
    tableMonthly: any[] = [];
    totalAccumulated: any[] = [];
    leftTitle: string = "Retirement Age";
    rightTitleMonthly: string = "Monthly Payout";
    rightTitleCumulative: string = "Cumulative Payout";
    chartType: string = this.navParams.get('type');
    
    
  constructor(public navParams: NavParams, 
              public viewCtrl: ViewController, 
              public calculations$: CalculationsProvider,
              public mock$: MockDataProvider) {}

  ngOnInit() {
  //   if(typeof this.calculations$ !== 'undefined') {
  //     this.retYears = this.calculations$.retirementYears;
  //     this.tableMonthly = this.calculations$.monthlyBenefit().monthly;
  //     this.totalAccumulated = this.calculations$.monthlyBenefit().cumulative;
    // }
    // else {
      this.retYears = [62, 63, 64, 65, 66, 67, 68, 69, 70];
      this.tableMonthly = this.mock$.getResults()[0].monthly;
      this.totalAccumulated = this.mock$.getResults()[0].cumulative;
    // }
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}

