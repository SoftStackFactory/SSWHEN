import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class EmailProvider {
  
  urlResults: string = "http://james-winter-2017-phortonssf.c9users.io:8080/api/results/emailResults";
  urlDashboard: string = "http://james-winter-2017-phortonssf.c9users.io:8080/api/results/emailResultsDashBoard";
  datapayload: any;
  date: any ;
  email: any;
  sixtwo: any;
  sixthree: any;
  sixfour: any;
  sixfive: any;
  sixsix: any;
  sixseven: any;
  sixeight: any;
  sixnine: any;
  sevenzero: any;
  Csixtwo: any;
  Csixthree: any;
  Csixfour: any;
  Csixfive: any;
  Csixsix: any;
  Csixseven: any;
  Csixeight: any;
  Csixnine: any;
  Csevenzero: any;
  
  constructor(public http: Http) {}
  
  sendEmailResults() {
    this.datapayload = {
      email: this.email,
      date: this.date,
      sixtwo: this.sixtwo,
      sixthree: this.sixthree,
      sixfour: this.sixfour,
      sixfive: this.sixfive,
      sixsix:  this.sixsix,
      sixseven: this.sixseven,
      sixeight: this.sixeight,
      sixnine:this.sixnine,
      sevenzero: this.sevenzero
        };
    console.log("test");
    console.log(this.urlResults);
    return this.http.post(this.urlResults, this.datapayload);
  }
  
  sendEmailDashboard() {
    this.datapayload = {
      email: this.email,
      date: this.date,
      sixtwo: this.sixtwo,
      sixthree: this.sixthree,
      sixfour: this.sixfour,
      sixfive: this.sixfive,
      sixsix:  this.sixsix,
      sixseven: this.sixseven,
      sixeight: this.sixeight,
      sixnine:this.sixnine,
      sevenzero: this.sevenzero,
      Csixtwo: this.Csixtwo,
      Csixthree: this.Csixthree,
      Csixfour: this.Csixfour,
      Csixfive: this.Csixfive,
      Csixsix:  this.Csixsix,
      Csixseven: this.Csixseven,
      Csixeight: this.Csixeight,
      Csixnine:this.Csixnine,
      Csevenzero: this.Csevenzero
        };
    console.log("test");
    console.log(this.urlResults);
    return this.http.post(this.urlDashboard, this.datapayload);
  }

}
