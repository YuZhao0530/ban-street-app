import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TourismPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 * 
 * 周边游
 * 标题
 * 参考价格
 * 地址
 * 描述
 * 电话
 * counts
 * 
 */
let weui = require('../../assets/js/weui.js')
declare var require;
@IonicPage()
@Component({
  selector: 'page-tourism',
  templateUrl: 'tourism.html',
})
export class TourismPage {
  list = [
    {
      title: '搜索周边游周边游周边游周边游周边游',
      price: '168',
      address: '地址地址地址地址地址地址',
      notes: '描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',
      tel: '13666657788',
      createdDate: '2017-11-11',
      photos: ['assets/imgs/logo.png','assets/imgs/logo.png','assets/imgs/logo.png'],
      counts: 105366
    },
    {
      title: '周边游周边游周边游周边游周边游',
      price: '168',
      address: '地址地址地址地址地址地址',
      notes: '描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',
      tel: '13666657788',
      createdDate: '2017-11-11',
      photos: ['assets/imgs/logo.png','assets/imgs/logo.png','assets/imgs/logo.png'],
      counts: 105366
    },
    {
      title: '周边游周边游周边游周边游周边游',
      price: '168',
      address: '地址地址地址地址地址地址',
      notes: '描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',
      tel: '13666657788',
      createdDate: '2017-11-11',
      photos: ['assets/imgs/logo.png','assets/imgs/logo.png','assets/imgs/logo.png'],
      counts: 105366
    },
  ];
  filterKeywords = {
    title: ''
  };
  searchInput = '';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TourismPage');
  }

  searchItems() {
    this.filterKeywords.title = this.searchInput;
  }

  detail(item) {
    this.navCtrl.push('TourismDetailPage', { item: item });
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
        onClick: function () { console.log('yes') }
      }]
    });
  }

}
