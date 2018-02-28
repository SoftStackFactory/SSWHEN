// This service gets its data from mockUsers[] & MOCKRESULTS[], which are of type SSUser{} & Results{} 
// The service could just as well get data from local storage or from the back end
import { SSUser } from '../../models/SSUser';
import { mockUsers } from '../../models/mockData/mockUsers';
import {Results} from '../../models/Results';
import { MOCKRESULTS } from '../../models/mockData/mockResults';

export class MockDataProvider {

  constructor() {}

  getUsers(): SSUser[] {
    return mockUsers;
  }
  
  getResults(): Results[] {
    return MOCKRESULTS;
  }
  
  
  
// method to return an Observable. This is needed when making requests to a remote server
  // getData(): Observable<SSUser[]> {
  //   return of(mockUsers);
  // }
}