import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LandingPage } from '../pages/landing/landing';
import { AppDescriptionPage } from '../pages/app-description/app-description';
import { InfoInputPage } from '../pages/info-input/info-input';
import { ResultsPage } from '../pages/results/results';
import { RegisterPage } from '../pages/register/register';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { ProfilePage } from '../pages/profile/profile';
<<<<<<< HEAD
import { MonthlyBenefitProvider } from '../providers/monthly-benefit/monthly-benefit';
=======
import { LoginPage } from '../pages/login/login';
import { EmailModalPage } from '../pages/email-modal/email-modal';
import { PopoverPage } from '../pages/dashboard/popover-page';
import { ModalPage } from '../pages/dashboard/modal-page';
>>>>>>> 989c7f5babed3f7c27e3404166241929e462151a

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LandingPage,
    AppDescriptionPage,
    InfoInputPage,
    ResultsPage,
    RegisterPage,
    DashboardPage,
    ProfilePage,
    LoginPage,
    EmailModalPage,
    PopoverPage,
    ModalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LandingPage,
    AppDescriptionPage,
    InfoInputPage,
    ResultsPage,
    RegisterPage,
    DashboardPage,
    ProfilePage,
    LoginPage,
    EmailModalPage,
    PopoverPage,
    ModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MonthlyBenefitProvider
  ]
})
export class AppModule {}
