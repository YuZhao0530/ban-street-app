import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { PipesModule } from '../pipes/pipes.module';
import { AppVersion } from '@ionic-native/app-version';

import { File } from '@ionic-native/file';
import { FileTransfer } from '@ionic-native/file-transfer';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CallNumber } from '@ionic-native/call-number';
import { HomeServicesProvider } from '../providers/home-services/home-services';
import { HttpServicesProvider } from '../providers/http-services/http-services';
import { PublishServicesProvider } from '../providers/publish-services/publish-services';
import { LoginServiceProvider } from '../providers/login-service/login-service';
import { CarServicesProvider } from '../providers/car-services/car-services';
import { UserServicesProvider } from '../providers/user-services/user-services';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    PipesModule,
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: true,
      menuType: 'overlay',
      mode: 'ios',
      pageTransition: 'md-transition',
      backButtonText: ''
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HomeServicesProvider,
    HttpServicesProvider,
    AppVersion,
    CallNumber,
    File,
    FileTransfer,
    Transfer,
    Camera,
    FilePath,
    PublishServicesProvider,
    LoginServiceProvider,
    CarServicesProvider,
    UserServicesProvider
  ]
})
export class AppModule {}
