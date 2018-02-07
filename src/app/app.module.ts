import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
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
import { UserDataProvider } from '../providers/user-data/user-data';
import { CalculationsProvider } from '../providers/calculations/calculations';
import { ComputationsProvider } from '../providers/computations/computations';
import { LoginPage } from '../pages/login/login';
import { EmailModalPage } from '../pages/email-modal/email-modal';
import { PopoverPage } from '../pages/dashboard/popover-page';
import { ModalPage } from '../pages/dashboard/modal-page';
import { DataTablePage } from '../pages/data-table/data-table';
import { ChartsModule } from 'ng2-charts';
import { BarChartComponent } from '../components/bar-chart/bar-chart'; 
import { ChartsComponent } from '../components/charts/charts';
import { MonthlyComponent } from '../components/monthly/monthly';  
import { CumulativeComponent } from '../components/cumulative/cumulative';
import { PresentValueComponent } from '../components/present-value/present-value';
import { IonicStorageModule } from '@ionic/storage';


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
    ModalPage,
    DataTablePage,
    BarChartComponent,
    ChartsComponent,
    MonthlyComponent,
    CumulativeComponent,
    PresentValueComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
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
    ModalPage,
    BarChartComponent,
    ChartsComponent,
    MonthlyComponent,
    CumulativeComponent,
    PresentValueComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserDataProvider,
    UserDataProvider,
    CalculationsProvider,
    ComputationsProvider
  ]
})
export class AppModule {}
