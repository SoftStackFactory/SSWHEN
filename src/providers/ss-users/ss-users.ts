import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SsUsersProvider {
  
  apiUrl: string = "https://sswhen-backend.herokuapp.com/api";

  constructor(public http: Http) {
    console.log('Hello SsUsersProvider Provider');
  }

  login(user) {
    let path = '/SSUsers/login';
    return this.http.post(this.apiUrl + path, user).map(res => res.json())
  }
  
  register(user) {
    // user is an {} containing email and password
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
  
  saveResultsByUser(user, token) {
    let path = '/SSUsers/' + user.id + '/results?access_token=' + token;
    return this.http.post(this.apiUrl + path, user).map(res => res.json())
  }
  
  getUser(userId, token) {
    let path = '/SSUsers/' + userId + '?access_token=' + token;
    return this.http.get(this.apiUrl + path).map(res => res.json())
  }

}
