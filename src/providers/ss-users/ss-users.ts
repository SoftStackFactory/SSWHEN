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
  apiUrl: string = "http://sswhen-bk-danilo-phortonssf.c9users.io:8080/api";

  constructor(public http: Http) {
    console.log('Hello SsUsersProvider Provider');
  }

  login(user) {
    let path = '/SSUsers/login';
    return this.http.post(this.apiUrl + path, user).map(res => res.json())
  }
  
  register(user) {
    let path = '/SSUsers';
    return this.http.post(this.apiUrl + path, user).map(res => res.json())
  }
  
  updateUser(user, token) {
    let path = '/SSUsers/' + user.userId + '/replace?access_token=' + token;
    return this.http.post(this.apiUrl + path, user).map(res => res.json())
  }

  logout(token) {
    let path = '/SSUsers/?access_token=' + token;
    return this.http.post(this.apiUrl + path, {}).map(res => res.json())
  }
  
  getResultsByUser(user, token) {
    let path = '/SSUsers/' + user.id + '/results?access_token=' + token;
    return this.http.post(this.apiUrl + path, user).map(res => res.json())
  }

}
