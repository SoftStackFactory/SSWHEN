import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LandingPage } from '../pages/landing/landing';
import { AppDescriptionPage } from '../pages/app-description/app-description';
import { InfoInputPage } from '../pages/info-input/info-input';
import { ResultsPage } from '../pages/results/results';
import { RegisterPage } from '../pages/register/register';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { HistoryPage } from '../pages/history/history';
import { ProfilePage } from '../pages/profile/profile';
import { UserDataProvider } from '../providers/user-data/user-data';
import { CalculationsProvider } from '../providers/calculations/calculations';
import { LoginPage } from '../pages/login/login';
import { EmailModalPage } from '../pages/email-modal/email-modal';
import { PopoverPage } from '../pages/dashboard/popover-page';
import { DataTablePage } from '../pages/data-table/data-table';
import { ChartsModule } from 'ng2-charts';
import { ChartComponent } from '../components/charts/charts';
import { LangaugePopoverComponent } from '../components/langauge-popover/langauge-popover';
import { MockDataProvider } from '../providers/mock-data/mock-data';
import { ModalDashboardComponent } from '../components/modal-dashboard/modal-dashboard';
import { ModalHistoryComponent } from '../components/modal-history/modal-history';
// import { AppConfig } from '../providers/app-config';
import { SsUsersProvider } from '../providers/ss-users/ss-users';
import { ResultsProvider } from '../providers/results/results';


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
    HistoryPage,
    ProfilePage,
    LoginPage,
    EmailModalPage,
    PopoverPage,
    ModalDashboardComponent,
    DataTablePage,
    ChartComponent,
    LangaugePopoverComponent,
    ModalDashboardComponent,
    ModalHistoryComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
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
    HistoryPage,
    ProfilePage,
    LoginPage,
    EmailModalPage,
    PopoverPage,
    ModalDashboardComponent,
    ChartComponent,
    LangaugePopoverComponent,
    ModalDashboardComponent,
    ModalHistoryComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserDataProvider,
    CalculationsProvider,
    MockDataProvider,
    // AppConfig,
    SsUsersProvider,
    ResultsProvider
  ]
})
export class AppModule {}
