import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ResultsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ResultsProvider {
  apiUrl: string = "http://sswhen-bk-danilo-phortonssf.c9users.io:8080/api";


  constructor(public http: Http) {
    console.log('Hello ResultsProvider Provider');
  }
  
  saveResults(result, token) {
    let path = '/results?access_token=' + token;
    return this.http.post(this.apiUrl + path, result)
  }
  
  getResults(userId, token) {
    let path = '/results/' + userId + '/sSUser?access_token=' + token;
    return this.http.get(this.apiUrl + path)
  }
  
  deleteResults(resultId, token) {
    let path = '/results/' + resultId + '?access_token=' + token;
    return this.http.delete(this.apiUrl + path)
  }

}