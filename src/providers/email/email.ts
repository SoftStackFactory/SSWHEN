import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class EmailProvider {
  
  urlResults: string = "http://james-winter-2017-phortonssf.c9users.io:8080/api/results/emailResults";
  urlDashboard: string = "http://james-winter-2017-phortonssf.c9users.io:8080/api/results/emailResultsDashBoard";
  
  constructor(public http: Http) {}
  
  sendEmailResults(userEmail) {
    let datapayload = {
      email: "",
      date: "01/19/1990",
      monthlyPayout: ""
    }
    datapayload.email = userEmail;
    console.log("test");
    console.log(this.urlResults);
    return this.http.post(this.urlResults, datapayload);
  }
  
  sendEmailDashboard() {
    let datapayload = {
      email: "jorduno19@gmail.com",
      date: "01/19/1990",
      monthlyPayout: "",
      cumulativepayout: ""
    }
    console.log("test");
    this.http.post(this.urlDashboard, datapayload);
  }

}
