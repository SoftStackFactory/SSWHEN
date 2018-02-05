import { Injectable } from '@angular/core';


@Injectable()

export class CalculationsProvider {
  
  // CalculationsProvider must obtain FRA monthly benefit, lifeExpectancy and discountRate from user input
  // monthlyBenefits[] need to be computed from the user input FRA monthly benefit
  lifeExpectancy: number = 80;
  discountRate: number = 3.5;
  retirementYears: any = [62, 63, 64, 65, 66, 67, 68, 69, 70]; // x-axis
  monthlyBenefits: any = [1314, 1421.4, 1528.8, 1636.2, 1743.6, 1851, 2016.33, 2181.67, 2347]; // y-axis
  accumulatedBenefits: any = []; // y-axis
  pvOfBenefits: any = []; // y-axis
  
  constructor() {
  }

  additiveBenefitsByRetirementYear() {
    for (let i = 0; i < this.retirementYears.length; i++ ) {
      this.accumulatedBenefits.push(  (this.lifeExpectancy - this.retirementYears[i]) * (this.monthlyBenefits[i] * 12) );
    }
  }
  
  pvOfBenefitsByRetirementYear() {
    let r_monthly = (this.discountRate / 12) / 100;
    for (let i = 0; i < this.retirementYears.length; i++ ) {
      let n = (this.lifeExpectancy - this.retirementYears[i]) * 12;
      this.pvOfBenefits.push( (this.monthlyBenefits[i]) * ( ( 1 - Math.pow( (1 + r_monthly),(-n) ) ) / r_monthly ) );
    }
  }
  
}