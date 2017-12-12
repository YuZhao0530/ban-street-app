import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
/**
 * Generated class for the CarpoolingDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 * 
 * 顺风车 （ 车主 driver ） ：
 * 出发地 departureLocation
 * 目的地 destination
 * 出发时间 departureTime
 * 空余座位 seats
 * 车型 model
 * 途经地1 passBy1
 * 途经地2 passBy2
 * 备注 notes
 * 发布人  publisher
 * 联系电话 tel
 * 
 * 顺风车 （ 乘客 passenger ） ：
 * 出发地
 * 目的地
 * 出发时间
 * 人数 num
 * 备注
 * 发布人
 * 联系电话
 * 
 */
let weui = require('../../assets/js/weui.js')
declare var require;
@IonicPage()
@Component({
  selector: 'page-carpooling-detail',
  templateUrl: 'carpooling-detail.html',
})
export class CarpoolingDetailPage {
  item: any;
  type: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private callNumber: CallNumber
  ) {
    this.item = this.navParams.get("item");
    this.type = this.item.type;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarpoolingDetailPage');
  }

  callPublisher(tel) {
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
