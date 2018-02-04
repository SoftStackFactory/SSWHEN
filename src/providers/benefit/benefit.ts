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
  
  //fullRetAge needs to be a function of dob

  fullRetAge: number = 804;
  
  //targetAge will be replaced by index in for loop

  targetAge: number = 744;

  pia: number;
  
  gender: any;
  
  //will need to write logic to set lifeExpect

  lifeExpect: number = 1020;

  benefit: any;

  monthDelta: any;

  cumBenefit: any;
  
  ageBenefit: any;
  
  benefitArray: any[] = [];
  
  monthlyArray: any[] = [];
  
  cumulativeArray: any[] = [];

  monthlyBenefit(pia) {

  //for(let targetAge=744; targetAge<=840; targetAge += 12) {
      
    if (this.targetAge <= this.fullRetAge) {

      this.monthDelta = this.fullRetAge - this.targetAge;

      if (this.monthDelta <= 36) {

        this.benefit = (1 - (this.monthDelta * (5 / 9) * 0.01)) * pia;

      } else {
        
        //0.2 = reduction for first 36 months

        this.benefit = (1 - (((this.monthDelta - 36) * (5 / 12) * 0.01) + 0.2)) * pia;

      }

    } else {

      //840 is 70 years in months
      this.monthDelta = 840 - this.targetAge;

      //may need to review this again in SS docs??
      let monthlyCredit = 0.08 / 12;

      let creditFactor = 1 + (this.monthDelta * monthlyCredit);

      this.benefit = pia * creditFactor;

    }
    this.cumBenefit = this.benefit * (this.lifeExpect - this.targetAge);
    
    this.ageBenefit = {
      age: this.targetAge,
      monthly: this.benefit,
      cumulative: this.cumBenefit
    }
    
    this.benefitArray.push(this.ageBenefit);
    this.monthlyArray.push(this.benefit);
    this.cumulativeArray.push(this.cumBenefit);
  //}
    
    
    console.log(this.benefitArray);
    console.log(this.monthlyArray);
    console.log(this.cumulativeArray);
    // console.log(this.ageBenefit);
    // console.log(this.cumBenefit);
    // console.log(this.benefit);
  }
}


