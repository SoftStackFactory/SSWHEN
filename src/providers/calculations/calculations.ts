import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()

export class CalculationsProvider {
  benefitsAtFRA: number;
  retirementYears: any = [62 .. 70];
  lifeExpectancy: any = [71 .. 100];
  accumulatedBenefits: number;
  pvOfBenefits: number;
  i: number;
  n: number;
  
  
  constructor(public http: HttpClient) {}
  
  // From monthly benefitsAtFRA, get monthly benefits at 62 .. 70

  // For each retirement age, calculate total accumulated benefits per life expectancy;
  // accumulatedBenefits = (LE - Age Retired) * (monthly payout * 12)

  // For each retirement age, calculate Preset Value of total retirement benefits per life expectancy;
  // pvOfBenefits = (monthly benefit) * ( ( 1 - (1 + i)^(-n) ) / i )
  //  i = interest rate (choose 3.5), and n is the number of months retirement lasts (LE - retirement age) * 12
}
