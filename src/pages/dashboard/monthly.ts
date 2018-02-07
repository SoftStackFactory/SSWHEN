import {Component} from '@angular/core';
import {NavParams, ViewController} from 'ionic-angular';
import { CalculationsProvider } from '../../providers/calculations/calculations';

@Component({
  template: `
    <button ion-button (click)="dismiss()">Back</button>
    <charts
        [chartsType]=" 'monthly' "
        [RetirementYears]="retirementYears" 
        [MonthlyPayout]="monthlyBenefits"
    ></charts>
  `
})

export class MonthlyChart {

  constructor(
      private navParams: NavParams, 
      public viewCtrl: ViewController, 
      public calculations$: CalculationsProvider) {}

  ngOnInit() {
    let retirementYears = this.calculations$.retirementYears;
    let monthlyBenefits = this.calculations$.monthlyBenefits;
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}