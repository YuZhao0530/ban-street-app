import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
 * 发布人  pulisher
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

@IonicPage()
@Component({
  selector: 'page-carpooling-detail',
  templateUrl: 'carpooling-detail.html',
})
export class CarpoolingDetailPage {
  item: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = this.navParams.get("item");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarpoolingDetailPage');
  }

}
