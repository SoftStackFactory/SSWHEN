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

  fullRetAge: number;
  
  lifeExpect: number;

  benefit: any;

  cumBenefit: any;

  monthlyArray: any[] = [];
  
  cumulativeArray: any[] = [];
  
  ageArray: any[] = [62, 63, 64, 65, 66, 67, 68, 69, 70];
  
  benefitData: any;

  monthlyBenefit(pia, gender, dob) {
    
    //set average life expectancy based on gender
    
    if (gender === "m") {
      
      //male life expectancy = 83 years = 996 months
      this.lifeExpect = 996;
      
    } else {
      
      //female life expectancy = 85.6 years = 1027 months
      this.lifeExpect = 1027;
      
    }

    //Manipulate user input to extract year of birth
    
    let dateString: string = dob;
    
    let yearString: any = dateString.substr(0,4);
    
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
    
    for(let targetAge: number = 744; targetAge<=840; targetAge += 12) {
        
      if (targetAge <= this.fullRetAge) {
  
        let monthDelta = this.fullRetAge - targetAge;
  
        if (monthDelta <= 36) {
  
          this.benefit = Math.round((1 - (monthDelta * (5 / 9) * 0.01)) * pia);
  
        } else {
          
          //0.2 = reduction for first 36 months
  
          this.benefit = Math.round((1 - (((monthDelta - 36) * (5 / 12) * 0.01) + 0.2)) * pia);
  
        }
  
      } else {
  
        let monthDelta = targetAge - this.fullRetAge;
  
        let monthlyCredit = 0.08 / 12;
  
        let creditFactor = 1 + (monthDelta * monthlyCredit);
  
        this.benefit = Math.round(pia * creditFactor);
  
      }
      
      //calculate cumulative total benefit based on life expectancy
      
      this.cumBenefit = this.benefit * (this.lifeExpect - targetAge);
      
      //push benefit numbers into separate arrays for use in charts
      
      this.monthlyArray.push(this.benefit);
      this.cumulativeArray.push(this.cumBenefit);
      
    }
    
      //create final data object for output
    
    this.benefitData = {
      age: this.ageArray,
      monthly: this.monthlyArray,
      cumulative: this.cumulativeArray
    }
    
    //USE THESE FOR TESTING ONLY
    //NEED TO ACCOUNT FOR USE CASE WHEN USER BACKS UP AND TRIES AGAIN, 
    //CURRENTLY ADDS NEW FIGURES TO EXISTING ARRAY
    
    // console.log(this.monthlyArray);
    // console.log(this.cumulativeArray);
    // console.log(this.benefitData);
    // console.log(this.fullRetAge);
    // this.monthlyArray = [];
    // this.cumulativeArray =[];
    // this.benefitData = {};
    
    return(this.benefitData);
    
  }
  
}


