import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the SsUsersProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class SsUsersProvider {
  apiUrl: string = "http://sayed-fall-2017-phortonssf.c9users.io:8080/api";

  constructor(public http: Http) {
    console.log('Hello SsUsersProvider Provider');
  }

  login(user) {
    // user is an {} containing properties email and password
    let path = '/SSUsers/login';
    return this.http.post(this.apiUrl + path, user).map(res => res.json())
  }
  
  register(user) {
    let path = '/SSUsers';
    return this.http.post(this.apiUrl + path, user).map(res => res.json())
  }
  
  updateUser(userId, token, SSUser) {
    let path = '/SSUsers/' + userId + '/replace?access_token=' + token;
    return this.http.post(this.apiUrl + path, SSUser).map(res => res.json())
  }

  logout(token) {
    let path = '/SSUsers/logout?access_token=' + token;
    return this.http.post(this.apiUrl + path, {}).map(res => res.json())
  }
  
  getResultsByUser(user, token) {
    let path = '/SSUsers/' + user.id + '/results?access_token=' + token;
    return this.http.post(this.apiUrl + path, user).map(res => res.json())
  }
  
  getUser(userId, token) {
    let path = '/SSUsers/' + userId + '?access_token=' + token;
    return this.http.get(this.apiUrl + path).map(res => res.json())
  }

}
