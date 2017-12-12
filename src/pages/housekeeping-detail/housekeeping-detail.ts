import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
/**
 * Generated class for the HousekeepingDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let weui = require('../../assets/js/weui.js')
declare var require;
@IonicPage()
@Component({
  selector: 'page-housekeeping-detail',
  templateUrl: 'housekeeping-detail.html',
})
export class HousekeepingDetailPage {
  item: any;
  types = {
    moveHouse: '搬家',
    housemaid: '保姆/月嫂',
    partTimeWorker: '钟点工',
    cleaning: '保洁清洗',
    houseMaintenance: '房屋维修',
    applianceRepair: '修家电',
    furnitureRepair: '修家具',
    unlock: '开锁换锁',
    decoration: '装修',
  };
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private callNumber: CallNumber
  ) {
    this.item = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HousekeepingDetailPage');
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
