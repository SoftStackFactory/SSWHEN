import {Component} from '@angular/core';
import {NavParams, ViewController} from 'ionic-angular';
import { CalculationsProvider } from '../../providers/calculations/calculations';

@Component({
  template: `
    <button ion-button (click)="dismiss()">Back</button>
    <charts 
        [chartsType]=" 'presentValue' "
        [RetirementYears]="retirementYears" 
        [pvOfTotalBenefits]="pvOfBenefits"
    ></charts>
  `
})

export class pvChart {

  constructor(
      private navParams: NavParams, 
      public viewCtrl: ViewController, 
      public calculations$: CalculationsProvider) {}

  ngOnInit() {
    this.calculations$.pvOfBenefitsByRetirementYear();
    let retirementYears = this.calculations$.retirementYears;
    let pvOfBenefits = this.calculations$.pvOfBenefits;
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}