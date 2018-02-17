import {Component, OnInit} from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { CalculationsProvider } from '../../providers/calculations/calculations';


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
              public calculations$: CalculationsProvider) {}

  ngOnInit() {
      this.retYears = this.calculations$.retirementYears;
      this.tableMonthly = this.calculations$.monthlyBenefit().monthly;
      this.totalAccumulated = this.calculations$.monthlyBenefit().cumulative;
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
