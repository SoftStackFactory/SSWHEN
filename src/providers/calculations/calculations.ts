import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Calculations1Provider provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class CalculationsProvider {

  constructor(public http: Http) {
    console.log('Hello CalculationsProvider Provider');
  }
  
  pia: number;
  
  gender: string;
  
  dob: string;
  
  getBenefitData() {
    let apiUrl = "https://andrew-winter-2017-phortonssf.c9users.io/api/results/benefitData?pia=" + this.pia +
    "&gender=" + this.gender +"&dob=" + this.dob +"11-2011"
    
    return this.http.get(apiUrl);
    
    let r_monthly = (this.discountRate / 12) / 100;
    for (let i = 0; i < this.retirementYears.length; i++) {
      let n = (this.lifeExpect / 12 - this.retirementYears[i]) * 12;
      this.pvOfBenefits.push(Math.round((this.monthlyArray[i]) * ((1 - Math.pow((1 + r_monthly), (-n))) / r_monthly)));
    }

    // logic to create rows for table
    for(let i = 0; i < this.retirementYears.length; i++) {
      let item = {
        retYear: this.retirementYears[i],
        monthlyPay: this.monthlyArray[i],
        cumulativePay: this.cumulativeArray[i]
      }
      this.tableData.push(item);
    }
    
    
    this.benefitData = {
      retYears: this.retirementYears,
      monthly: this.monthlyArray,
      cumulative: this.cumulativeArray,
      pv: this.pvOfBenefits
    }

    // console.log("Full Retirement Age: ", Math.round(this.fullRetAge / 12));
    // console.log("Average life expectancy for this gender " + this.lifeExpect / 12 + " years");
    // console.log("Monthly Benefits per Retirement Year", this.monthlyArray);
    // console.log("Total Cumulative Benefits per Retirement Year", this.cumulativeArray);
    // console.log("Present Value of Total Cumulative Benefits per Retirement Year", this.pvOfBenefits);
    // console.log("benefitData:", this.benefitData);

    //empty calculation arrays
    
    this.monthlyArray = [];
    this.cumulativeArray =[];
    this.pvOfBenefits = [];
    
    return (this.benefitData);

  }


