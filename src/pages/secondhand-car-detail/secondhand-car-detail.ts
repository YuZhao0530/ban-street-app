import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
/**
 * Generated class for the SecondhandCarDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let weui = require('../../assets/js/weui.js')
declare var require;
@IonicPage()
@Component({
  selector: 'page-secondhand-car-detail',
  templateUrl: 'secondhand-car-detail.html',
})
export class SecondhandCarDetailPage {
  item: any;
  logo = '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private callNumber: CallNumber
  ) {
    this.item = navParams.get('item');
    // this.logo = JSON.parse(this.item.jsonString).car.logo;
    // console.log(JSON.parse(this.item.jsonString));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecondhandCarDetailPage');
  }

  callContact(tel) {
    weui.confirm(tel, {
      title: '是否拨打电话',
      buttons: [{
        label: '取消',
        type: 'default',
        onClick: function () { console.log('no') }
      }, {
        label: '拨打',
        type: 'primary',
        onClick: () => {
          this.callNumber.callNumber(tel, true)
            .then()
            .catch();
        }
      }]
    });
  }
}
