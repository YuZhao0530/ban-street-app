import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  user: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
  ) {
    this.user = JSON.parse(localStorage.getItem('userInfo'));
    console.log(this.user);
  }

  openPublishList() {
    this.navCtrl.push('PublishListPage', { user: this.user });
  }

  openAccountInfo() {
    this.navCtrl.push('AccountInfoPage', { user: this.user });
  }

  openAppInfo() {
    this.navCtrl.push('AppInformationPage');
  }

  openAdvices() {
    this.navCtrl.push('AdvicesPage');
  }

  openAboutUs() {
    this.navCtrl.push('AboutUsPage');
  }

  openSettings() {
    this.navCtrl.push('SettingsPage');
  }
}
