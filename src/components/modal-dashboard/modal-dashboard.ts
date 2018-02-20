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
    chartType: string;
    
  constructor(public navParams: NavParams, 
              public viewCtrl: ViewController, 
              public calculations$: CalculationsProvider
  ) {
    this.chartType = this.navParams.get('modalType');
  }

  ngOnInit() {
      this.retYears = this.calculations$.retirementYears;
      this.tableMonthly = this.calculations$.monthlyBenefit().monthly;;
      this.totalAccumulated = this.calculations$.monthlyBenefit().cumulative;
      console.log(this.chartType)
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
