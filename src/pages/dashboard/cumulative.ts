import {Component} from '@angular/core';
import {NavParams, ViewController} from 'ionic-angular';
import { CalculationsProvider } from '../../providers/calculations/calculations';

@Component({
  template: `
    <button ion-button (click)="dismiss()">Back</button>
    <charts 
        [chartsType]=" 'cumulative' "
        [RetirementYears]="retirementYears" 
        [CumulativeBenefits]="accumulatedBenefits"
    ></charts>
  `
})

export class CumulativeChart {

  constructor(
      private navParams: NavParams, 
      public viewCtrl: ViewController, 
      public calculations$: CalculationsProvider) {}

  ngOnInit() {
    this.calculations$.additiveBenefitsByRetirementYear();
    let retirementYears = this.calculations$.retirementYears;
    let accumulatedBenefits = this.calculations$.accumulatedBenefits;
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}