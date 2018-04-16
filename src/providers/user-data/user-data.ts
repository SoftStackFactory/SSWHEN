import {Injectable} from '@angular/core';

@Injectable()
// UserDataProvider is the information relay system for the app

export class UserDataProvider {
  retYears: number[];
  monthly: number[];
  cumulative: number[];
  presentValue: number[];
  isRegistered: boolean;
  gender: string;
  FRAbenefit: number;
  totalContribution: number;
  isMarried: boolean;
  dateOfBirth: any;
  userId: string;
  token: string;
  email: string;
  password: string;
  resultsProviderID: string;
  lifeExpectancy: number;

  constructor() {}

}