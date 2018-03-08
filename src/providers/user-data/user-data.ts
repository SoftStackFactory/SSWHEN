import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

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
  
  constructor(public storage: Storage) {
      this.storage.get('userId').then( val => {
        this.userId = val;
        
        this.storage.get('token').then( val => {
          this.token = val;
        })
      })
  }

}