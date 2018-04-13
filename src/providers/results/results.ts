import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class ResultsProvider {
  
  apiUrl: string = "https://sswhen-backend.herokuapp.com/api";

  constructor(public http: Http) {}
  
  saveResults(result, token) {
    // POST /results
    let path = '/results?access_token=' + token;
    return this.http.post(this.apiUrl + path, result).map(res => res.json())
  }
  
  getResultsById(resultId, token) {
    // GET /results/{id}
    let path = '/results/' + resultId + '?access_token=' + token;
    return this.http.get(this.apiUrl + path).map(res => res.json())
  }

  getResults(sSUser, token) {
    // GET /results
    let userId = sSUser.id;
    // let filter = {"where": {"sSUserId": userId}};
    // let path = '/results?filter='+ JSON.stringify(filter) + '&access_token='+ token;
    let path = '/results?filter='+ '[where][sSUserId]=' + userId + '&access_token='+ token;
    return this.http.get(this.apiUrl + path).map(res => res.json())
  }
  
  deleteResultsById(resultId, token) {
    // DELETE /results/{id}
    let path = '/results/' + resultId + '?access_token=' + token;
    return this.http.delete(this.apiUrl + path).map(res => res.json())
  }

}