import { Injectable } from '@angular/core';

@Injectable()

export class CalculationsProvider {

  constructor() { }

  pia: number;
  
  gender: string;
  
  dob: any;
  
  fullRetAge: number;

  lifeExpect: number;

  benefit: any;

  cumBenefit: any;

  retirementYears: any = [62, 63, 64, 65, 66, 67, 68, 69, 70];

  discountRate: number = 3.5;

  monthlyArray: any[] = [];

  cumulativeArray: any[] = [];

  pvOfBenefits: any = [];
  
  tableData: any[] = [];
  
  FRAbenefitAmount: number;

  benefitData: any;

  monthlyBenefit() {

    this.FRAbenefitAmount = this.pia;
    
    //set average life expectancy based on gender

    if (this.gender === "m") {
      //male life expectancy = 83 years = 996 months
      this.lifeExpect = 996;
    } else {
      //female life expectancy = 85.6 years = 1027 months
      this.lifeExpect = 1027;
    }

    //Manipulate user input to extract year of birth

    let dateString: string = this.dob;
    let yearString: any = dateString.substr(0, 4);
    let dobYear = Number(yearString);

    //Logic to determine full retirement age.  All fulRetAge values in months.
    
    if (dobYear <= 1937) {
      this.fullRetAge = 780;
    } else if (dobYear > 1937 && dobYear < 1943) {
      this.fullRetAge = 780 + ((dobYear - 1937) * 2);
    } else if (dobYear >= 1943 && dobYear < 1955) {
      this.fullRetAge = 792;
    } else if (dobYear >= 1955 && dobYear < 1960) {
      this.fullRetAge = 792 + ((dobYear - 1954) * 2);
    } else {
      this.fullRetAge = 804;
    }

    //logic to calculate array of benefit amounts 

    for (let targetAge: number = 744; targetAge <= 840; targetAge += 12) {
      if (targetAge <= this.fullRetAge) {
        let monthDelta = this.fullRetAge - targetAge;
        if (monthDelta <= 36) {
          this.benefit = Math.round((1 - (monthDelta * (5 / 9) * 0.01)) * this.pia);
        } else {
          //0.2 = reduction for first 36 months
          this.benefit = Math.round((1 - (((monthDelta - 36) * (5 / 12) * 0.01) + 0.2)) * this.pia);
        }
      } else {
        let monthDelta = targetAge - this.fullRetAge;
        let monthlyCredit = 0.08 / 12;
        let creditFactor = 1 + (monthDelta * monthlyCredit);
        this.benefit = Math.round(this.pia * creditFactor);
      }

      //calculate cumulative total benefit based on life expectancy

      this.cumBenefit = this.benefit * (this.lifeExpect - targetAge);

      //push benefit numbers into separate arrays for use in charts

      this.monthlyArray.push(this.benefit);
      this.cumulativeArray.push(this.cumBenefit);
    }

    // logic to calculate present value of benefits per retirement age. Discount rate is assumed at 3.5%
    
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

}
