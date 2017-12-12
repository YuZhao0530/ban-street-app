import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
/**
 * Generated class for the SecondhandHouseDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 * 
 * 二手房 secondhandHouse :
 * 标题 title
 * 地址 address
 * 户型 structure { 室 厅 卫 }
 * 面积 area
 * 期望售价 price
 * 楼层 floor
 * 朝向 towards 南 西南 东 东南 北 东北 西 西北 南北 东西
 * 装修 decoration 毛坯 简单装修 中等装修 精装修 豪华装修
 * 备注 notes
 * 发布人 publisher
 * 电话 tel
 * 照片 photos
 * 
 */
let weui = require('../../assets/js/weui.js')
declare var require;
@IonicPage()
@Component({
  selector: 'page-secondhand-house-detail',
  templateUrl: 'secondhand-house-detail.html',
})
export class SecondhandHouseDetailPage {
  item: any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private callNumber: CallNumber
  ) {
    this.item = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecondhandHouseDetailPage');
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
