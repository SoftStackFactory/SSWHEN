import { Injectable } from '@angular/core';


@Injectable()

export class CalculationsProvider {
  // monthlyBenefits: any = {
  //   62: 1314,
  //   63: 1421.4,
  //   64: 1528.8,
  //   65: 1636.2,
  //   66: 1743.6,
  //   67: 1851,
  //   68: 2016.33,
  //   69: 2181.67,
  //   70: 2347,
  // };
  retirementYears: any = [62, 63, 64, 65, 66, 67, 68, 69, 70]; // x-axis
  monthlyBenefits: any = [1314, 1421.4, 1528.8, 1636.2, 1743.6, 1851, 2016.33, 2181.67, 2347];
  accumulatedBenefits: any = []; // y-axis
  pvOfBenefits: any = []; // y-axis
  
  constructor() {
  }

  additiveBenefitsByRetirementYear(lifeExpectancy) {
    for (let i = 0; i < this.retirementYears.length; i++ ) {
      this.accumulatedBenefits.push(  (lifeExpectancy - this.retirementYears[i]) * (this.monthlyBenefits[i] * 12) );
    }
  }
  
  pvOfBenefitsByRetirementYear(lifeExpectancy, r) {
    for (let i = 0; i < this.retirementYears.length; i++ ) {
      let n = (lifeExpectancy - this.retirementYears[i]) * 12;
      this.pvOfBenefits.push( (this.monthlyBenefits[i]) * ( ( 1 - Math.pow( (1 + r),(-n) ) ) / r ) );
    }
  }
  
}
