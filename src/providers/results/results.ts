import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class ResultsProvider {
  
  apiUrl: string = "http://sayed-fall-2017-phortonssf.c9users.io:8080/api";

  constructor(public http: Http) {}
  
  saveResults(result, token) {
    let path = '/results?access_token=' + token;
    return this.http.post(this.apiUrl + path, result)
  }

// Assuming data is posted using the POST /results path, as happens in saveResults(), the Request URL is;
// http://sayed-fall-2017-phortonssf.c9users.io:8080/api/results?access_token=dWt6GiL5LlLPjJpKMXVIAqzv1h9o211mo4tVtQOWRJYvVa1WDlwtFACvV2vN49Cv
// This is true whether you have posted a single user object entry or an array of multiple such entries. In the later, if you filter by sSUser, 
// the Request URL changes, but the same response is returned. There's no point in filtering, so there is no sSUser in the URL path

  getResults(sSUser, token) {
   let userId = sSUser.id;
  // let path = '/results?filter=' + userId + '&access_token=' + token;
  // let path = '/results/' + userId + '?access_token=' + token;
   let path = '/results?access_token=' + token;
   return this.http.get(this.apiUrl + path).map(res => res.json());
  }
  
  deleteResults(resultId, token) {
    let path = '/results/' + resultId + '?access_token=' + token;
    return this.http.delete(this.apiUrl + path)
  }

}