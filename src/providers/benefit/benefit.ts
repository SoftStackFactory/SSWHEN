import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the BenefitProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BenefitProvider {

  constructor(public http: Http) {
    console.log('Hello BenefitProvider Provider');
  }

  dob: any;

  fullRetAge: number = 804;

  targetAge: number = 744;

  pia: number = 1000;
  
  gender: any;

  lifeExpect: number = 1020;

  benefit: any;

  monthDelta: any;

  cumBenefit: any;
  
  ageBenefit: any;
  
  benefitArray: any[];

  monthlyBenefit(fullRetAge, targetAge, pia, lifeExpect) {

    //for(let i=744; i<=840; i += 12) {
    
    if (this.targetAge <= this.fullRetAge) {

      this.monthDelta = this.fullRetAge - this.targetAge;

      if (this.monthDelta <= 36) {

        this.benefit = (1 - (this.monthDelta * (5 / 9) * 0.01)) * this.pia;

      } else {
        
        //0.2 = reduction for first 36 months

        this.benefit = (1 - (((this.monthDelta - 36) * (5 / 12) * 0.01) + 0.2)) * this.pia;

      }

    } else {

      //840 is 70 years in months
      this.monthDelta = 840 - this.targetAge;

      //may need to review this again in SS docs??
      let monthlyCredit = 0.08 / 12;

      let creditFactor = 1 + (this.monthDelta * monthlyCredit);

      this.benefit = this.pia * creditFactor;

    }
    this.cumBenefit = this.benefit * (this.lifeExpect - this.targetAge);
    
    this.ageBenefit = {
      age: this.targetAge,
      monthly: this.benefit,
      cumulative: this.cumBenefit
    }
    
    console.log(this.ageBenefit);
    console.log(this.cumBenefit);
    console.log(this.benefit);
  }
}


