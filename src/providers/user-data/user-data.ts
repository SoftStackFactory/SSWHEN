import { Injectable } from '@angular/core';

@Injectable()

export class UserDataProvider {
  date: string;
  sex: string;
  start: number;
  FRA: number;
  end: number;

  constructor() {
  }

}