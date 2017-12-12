import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
/**
 * Generated class for the SecondhandGoodsDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let weui = require('../../assets/js/weui.js')
declare var require;
@IonicPage()
@Component({
  selector: 'page-secondhand-goods-detail',
  templateUrl: 'secondhand-goods-detail.html',
})
export class SecondhandGoodsDetailPage {
  item: any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private callNumber: CallNumber
  ) {
    this.item = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecondhandGoodsDetailPage');
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
