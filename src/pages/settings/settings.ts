import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppVersion } from '@ionic-native/app-version';
import { App } from 'ionic-angular';
import { LoginServiceProvider } from '../../providers/login-service/login-service';
/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  verInfo = {
    name: '',
    packName: '',
    verCode: '',
    verNum: ''
  }

  constructor(
    public navCtrl: NavController, 
    public loginService: LoginServiceProvider, 
    public navParams: NavParams,
    public appVersion: AppVersion,
    private app:App
  ) {
    this.appVersion.getAppName().then(
      (res) => {
        console.log('name',JSON.stringify(res));
        this.verInfo.name = res;
      }
    );
    this.appVersion.getPackageName().then(
      (res) => {
        console.log('packageName',JSON.stringify(res));
        this.verInfo.packName = res;
      }
    );
    this.appVersion.getVersionCode().then(
      (res) => {
        console.log('verCode',JSON.stringify(res));
        this.verInfo.verCode = res;
      }
    );
    this.appVersion.getVersionNumber().then(
      (res) => {
        console.log('verNumber',JSON.stringify(res));
        this.verInfo.verNum = res;
      }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  logout() {
    window.localStorage.removeItem('userInfo');
    console.log(window.localStorage.length);
    this.app.getRootNav().setRoot('LoginPage');
  }

}
