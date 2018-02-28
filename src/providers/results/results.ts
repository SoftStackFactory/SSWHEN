import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class ResultsProvider {
  
  apiUrl: string = "http://sswhen-bk-danilo-phortonssf.c9users.io:8080/api";

  constructor(public http: Http) {}
  
  saveResults(result, token) {
    let path = '/results?access_token=' + token;
    return this.http.post(this.apiUrl + path, result)
  }

  getResults(sSUser, token) {
   let userId = sSUser.id;
  // let filter = {"where": {"sSUserId": userId}};
  // let path = '/results?filter='+ JSON.stringify(filter) + '&access_token='+ token;
  let path = '/results?filter='+ '[where][sSUserId]=' + userId + '&access_token='+ token;
  // let path = '/results?filter='+ '%7B%22where%22%3A%20%7B%20%22sSUserId%22%3A%20%22' + userId + '%22%7D%7D&access_token='+ token;
   return this.http.get(this.apiUrl + path).map(res => res.json());
  }
  
  deleteResults(resultId, token) {
    let path = '/results/' + resultId + '?access_token=' + token;
    return this.http.delete(this.apiUrl + path)
  }

}