import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

/*
  Generated class for the Calculations1Provider provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class Calculations1Provider {

  constructor(public http: Http) {
    console.log('Hello Calculations1Provider Provider');
  }
  
  pia: number;
  
  gender: string;
  
  dob: string;
  
  getBenefitData() {
    let apiUrl = "https://andrew-winter-2017-phortonssf.c9users.io/api/results/benefitData?pia=" + this.pia +
    "&gender=" + this.gender +"&dob=" + this.dob +"11-2011"
    
    return this.http.get(apiUrl);
    
    });
  }

}

