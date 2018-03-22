import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class CalculationsProvider {

  constructor(public http: Http) {}
  
  pia: number;
  
  gender: string;
  
  dob: string;
  getBenefitData() {
    let apiUrl = "https://sswhen-backend.herokuapp.com/api/results/benefitData?pia=" + this.pia + "&gender=" + this.gender + "&dob=" + this.dob + "11-2011";
    return this.http.get(apiUrl);
  };
  
}



