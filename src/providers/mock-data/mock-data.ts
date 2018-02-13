import { Observable} from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map } from 'rxjs/operator/map';

// This service gets its data from mockUsers[], which is of type SSUser{} - an object with properties email - isMarried. 
// The service could just as well get data from local storage or from the back end
import {SSUser} from '../../models/SSUser';
import { mockUsers } from '../../models/mockData/mockUsers';


export class MockDataProvider {

  constructor() {}

  // getData(): SSUser[] {
  // return mockUsers;
  // }
  
// method to return an Observable. This is needed when making requests to a remote server
  getData(): Observable<SSUser[]> {
    return of(mockUsers);
  }

}