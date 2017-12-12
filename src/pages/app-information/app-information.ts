import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppVersion } from '@ionic-native/app-version';
/**
 * Generated class for the AppInformationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-app-information',
  templateUrl: 'app-information.html',
})
export class AppInformationPage {
  verInfo = {
    name: '',
    packName: '',
    verCode: '',
    verNum: ''
  }
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public appVersion: AppVersion
  ) {
    this.appVersion.getAppName().then(
      (res) => {
        console.log('name',JSON.stringify(res));
      }
    );
    this.appVersion.getPackageName().then(
      (res) => {
        console.log('packageName',JSON.stringify(res));
      }
    );
    this.appVersion.getVersionCode().then(
      (res) => {
        console.log('verCode',JSON.stringify(res));
      }
    );
    this.appVersion.getVersionNumber().then(
      (res) => {
        console.log('verNumber',JSON.stringify(res));
      }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppInformationPage');
  }

}
