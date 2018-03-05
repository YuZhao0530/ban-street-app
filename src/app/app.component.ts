import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginServiceProvider } from '../providers/login-service/login-service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = '';

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public loginServices: LoginServiceProvider
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      statusBar.overlaysWebView(false);
      splashScreen.hide();
    });
    if (localStorage.getItem('userInfo')) {
      let i = {
        tel: JSON.parse(localStorage.getItem('userInfo')).tel,
        pwd: JSON.parse(localStorage.getItem('userInfo')).pwd
      }
      this.loginServices.login(i).then(
        (res) => {
          if (res.result == 'success') {
            window.localStorage.setItem('userInfo', JSON.stringify(res.data));
            this.rootPage = 'TabsPage';
          } else {
            this.rootPage = 'LoginPage';
          }
        }
      );
    } else {
      this.rootPage = 'LoginPage';
    }
  }
}
