import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class CalculationsProvider {

  constructor(public http: Http) {
    console.log('Hello CalculationsProvider Provider');
  }
  
  pia: number;
  
  gender: string;
  
  dob: string;
  
  getBenefitData() {
    let apiUrl = "http://sayed-fall-2017-phortonssf.c9users.io:8080/api/results/benefitData?pia=" + this.pia +
    "&gender=" + this.gender +"&dob=" + this.dob +"11-2011";
    return this.http.get(apiUrl);
  };
  
}



