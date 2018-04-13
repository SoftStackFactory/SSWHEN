import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class CalculationsProvider {

  constructor(public http: Http) {};

  // pia: number;
  // gender: string;
  // dob: string;

  getBenefitData(pia, gender, dob) {
    // let apiUrl = "https://sswhen-backend.herokuapp.com/api/results/benefitData?pia=" + this.pia + "&gender=" + this.gender + "&dob=" + this.dob + "11-2011";
        let apiUrl = "https://sswhen-backend.herokuapp.com/api/results/benefitData?pia=" + pia + "&gender=" + gender + "&dob=" + dob + "11-2011";
    // let apiUrl = "https://sswhen-backend.herokuapp.com/api/results/benefitData?pia=" + this.pia + "&gender=" + this.gender + "&dob=" + this.dob + "&access_token=" + token;
    return this.http.get(apiUrl);
  };
}


