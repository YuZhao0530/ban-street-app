import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CarpoolingPage page.
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
  selector: 'page-carpooling',
  templateUrl: 'carpooling.html',
})
export class CarpoolingPage {
  type: string;
  driversList = [
    {
      id: 0,
      departureLocation: 'XXXX小区',
      destination: 'BBBB城',
      departureTime: '2017-11-29 23：30',
      seats: 4,
      model: 'SUV',
      passBy1: '',
      passBy2: '',
      notes: '哟有哟有哟有哟有哟有哟有哟有哟有哟有哟有',
      publisher: '张',
      tel: '13656562333',
      createdDate: '2017-11-29',
      counts: 11056
    },
    {
      id: 1,
      departureLocation: 'AAAA小区',
      destination: 'SSSS城',
      departureTime: '2017-11-29 23：30',
      seats: 4,
      model: 'SUV',
      passBy1: '',
      passBy2: '',
      notes: '哟有哟有哟有哟有哟有哟有哟有哟有哟有哟有',
      publisher: '张',
      tel: '13656562333',
      createdDate: '2017-11-29',
      counts: 11056
    },
    {
      id: 0,
      departureLocation: 'BBBB小区',
      destination: 'SSSS城',
      departureTime: '2017-11-29 23：30',
      seats: 4,
      model: 'SUV',
      passBy1: '',
      passBy2: '',
      notes: '哟有哟有哟有哟有哟有哟有哟有哟有哟有哟有',
      publisher: '张',
      tel: '13656562333',
      createdDate: '2017-11-29',
      counts: 11056
    }
  ];
  passengersList = [
    {
      id: 0,
      departureLocation: 'RRRR小区',
      destination: 'SSTT城',
      departureTime: '2017-11-29 23：30',
      num: 2,
      notes: '哟有哟有哟有哟有哟有哟有哟有',
      publisher: '李',
      tel: '13656562333',
      createdDate: '2017-11-29',
      counts: 11056
    },
    {
      id: 0,
      departureLocation: 'TTT小区',
      destination: 'SSSS城',
      departureTime: '2017-11-29 23：30',
      num: 2,
      notes: '哟有哟有哟有哟有哟有哟有哟有',
      publisher: '张',
      tel: '13656562333',
      createdDate: '2017-11-29',
      counts: 11056
    }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.type = 'driver';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarpoolingPage');
  }

  changeType() {
    weui.actionSheet(
      [
        {
          label: '找车主',
          onClick: () => {
            this.type = 'driver';
            console.log('找车主');
          }
        }, {
          label: '找乘客',
          onClick: () => {
            this.type = 'passenger';
            console.log('找乘客');
          }
        }
      ]
    );
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
        onClick: function () { console.log('yes') }
      }]
    });
  }

  checkDetial(item, type) {
    this.navCtrl.push('CarpoolingDetailPage', { item: item, type: type });
  }

}
