import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class EmailProvider {
  
  urlResults: string = "http://james-winter-2017-phortonssf.c9users.io:8080/api/results/emailResults";
  urlDashboard: string = "http://james-winter-2017-phortonssf.c9users.io:8080/api/results/emailResultsDashBoard";
  datapayload: any;
  date: string = "";
  email: string = "";
  monthlyPayout: any;
  constructor(public http: Http) {}
  
  sendEmailResults() {
    this.datapayload = {
      email: this.email,
      date: this.date,
      monthlyPayout: this.monthlyPayout
    };
    // this.datapayload.email = payload.userEmail;
    // this.datapayload.monthlyPayout = payload.monthlyPayout;
    console.log(this.datapayload.monthlyPayout);
    console.log("test");
    console.log(this.urlResults);
    return this.http.post(this.urlResults, this.datapayload);
  }
  
  sendEmailDashboard(payload) {
    // let datapayload = {
    //   email: "jorduno19@gmail.com",
    //   date: "01/19/1990",
    //   monthlyPayout: "",
    //   cumulativepayout: ""
    // }
    // console.log("test");
    this.http.post(this.urlDashboard, payload);
  }

}
