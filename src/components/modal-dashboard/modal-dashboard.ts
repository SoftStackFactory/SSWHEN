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
    chartType: string = this.navParams.get('type');
    
  constructor(public navParams: NavParams, 
              public viewCtrl: ViewController, 
              public calculations$: CalculationsProvider) {}

  ngOnInit() {
      this.retYears = this.calculations$.retirementYears;
      this.tableMonthly = this.calculations$.monthlyArray;
      this.totalAccumulated = this.calculations$.cumulativeArray
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
