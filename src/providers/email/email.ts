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
  
  url: string = "http://james-winter-2017-phortonssf.c9users.io:8080/api/results/emailResults";
  
  constructor(public http: Http) {
    console.log('Hello EmailProvider Provider');
  }
  
  sendEmailResults() {
    
  }
  
  sendEmailDashboard() {
    
  }

}
