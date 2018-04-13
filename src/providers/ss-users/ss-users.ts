import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SsUsersProvider {
  
  apiUrl: string = "https://sswhen-backend.herokuapp.com/api";

  constructor(public http: Http) {}

  login(user) {
    // POST /SSUsers/login
    let path = '/SSUsers/login';
    return this.http.post(this.apiUrl + path, user).map(res => res.json())
  }
  
  logout(token) {
    // POST /SSUsers/logout
    let path = '/SSUsers/logout?access_token=' + token;
    return this.http.post(this.apiUrl + path, {}).map(res => res.json())
  }
  
  register(user) {
    let path = '/SSUsers';
    return this.http.post(this.apiUrl + path, user).map(res => res.json())
  }
  
  getUser(userId, token) {
    // GET /SSUsers/{id}
    let path = '/SSUsers/' + userId + '?access_token=' + token;
    return this.http.get(this.apiUrl + path).map(res => res.json())
  }
  
  updateUser(userId, token, SSUser) {
    // POST /SSUsers/{id}/replace
    let path = '/SSUsers/' + userId + '/replace?access_token=' + token;
    return this.http.post(this.apiUrl + path, SSUser).map(res => res.json())
  }
  
  saveResultsByUser(userId, token, results) {
    // POST /SSUsers/{id}/results
    let path = '/SSUsers/' + userId + '/results?access_token=' + token;
    return this.http.post(this.apiUrl + path, results).map(res => res.json())
  }

}
