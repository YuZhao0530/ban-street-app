import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserServicesProvider } from '../../providers/user-services/user-services';
/**
 * Generated class for the AdvicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-advices',
  templateUrl: 'advices.html',
})
export class AdvicesPage {
  item = {
    publisher: JSON.parse(localStorage.getItem('userInfo')).id,
    content: ''
  };
  constructor(
    public navCtrl: NavController, 
    public userServices: UserServicesProvider, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdvicesPage');
  }

  submit() {
    if(this.item.content != ''){
      console.log(JSON.stringify(this.item));
      this.userServices.submitAdvice(this.item).then(
        (res) => {
          console.log(JSON.stringify(res));
          this.navCtrl.pop();
        }
      );
    }
  }

}
