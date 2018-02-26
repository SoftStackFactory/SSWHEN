import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the EmailProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class EmailProvider {
  
  urlResults: string = "http://james-winter-2017-phortonssf.c9users.io:8080/api/results/emailResults";
  urlDashboard: string = "http://james-winter-2017-phortonssf.c9users.io:8080/api/results/emailResultsDashBoard";
  
  constructor(public http: Http) {}
  
  sendEmailResults(data) {
    this.http.post(this.urlResults, data)
  }
  
  sendEmailDashboard(data) {
    this.http.post(this.urlDashboard, data)
  }

}
