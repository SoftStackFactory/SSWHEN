import {Injectable} from '@angular/core';

@Injectable()

export class UserDataProvider {
  monthly: number[];
  cumulative: number[];
  isRegistered: boolean;
  gender: string;
  FRAbenefit: number;
  totalContribution: number;
  isMarried: boolean;
  dateOfBirth: any;
  userId: string;
  token: string;
  retYears: number[];

  constructor() {}

}