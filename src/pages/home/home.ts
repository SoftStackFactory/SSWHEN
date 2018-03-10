import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LandingPage } from '../landing/landing';
import { AppDescriptionPage } from '../app-description/app-description';
import { InfoInputPage } from '../info-input/info-input';
import { ResultsPage } from '../results/results';
import { RegisterPage } from '../register/register';
import { DashboardPage } from '../dashboard/dashboard';
import { ProfilePage } from '../profile/profile';
import { HistoryPage } from '../history/history';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToLanding(params){
    if (!params) params = {};
    this.navCtrl.push(LandingPage);
  }

  goToAppDescription(params){
    if (!params) params = {};
    this.navCtrl.push(AppDescriptionPage);
  }

  goToInfoInput(params){
    if (!params) params = {};
    this.navCtrl.push(InfoInputPage);
  }

  goToResults(params){
    if (!params) params = {};
    this.navCtrl.push(ResultsPage);
  }

  goToRegister(params){
    if (!params) params = {};
    this.navCtrl.push(RegisterPage);
  }

  goToDashboard(params){
    if (!params) params = {};
    this.navCtrl.push(DashboardPage);
  }

  goToProfile(params){
    if (!params) params = {};
    this.navCtrl.push(ProfilePage);
  }

  goToHistory(params){
    if (!params) params = {};
    this.navCtrl.push(HistoryPage);
  }

  goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }

}
