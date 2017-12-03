import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InternetWorkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 * 互联网 InternetWork
 * 
 * 标题 title
 * 类型 type
 * 地址 address
 * 联系人 contact
 * 电话 tel
 * 详细描述 notes
 * counts
 * 
 */
let weui = require('../../assets/js/weui.js')
declare var require;
@IonicPage()
@Component({
  selector: 'page-internet-work',
  templateUrl: 'internet-work.html',
})
export class InternetWorkPage {
  list = [
    {
      title: '互联网标题标题标标题标标题标标题标标题标标题标标题标标标标',
      poster: 'assets/imgs/logo.png',
      address: '地址地址地址地址地址',
      contact: '张',
      tel: '13666553333',
      notes: '详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述',
      createdDate: '2017-11-29',
      counts: 10533,
    },
    {
      title: '互联网搜索搜索标索标索标索标索标索标题标题标题标题',
      poster: 'assets/imgs/logo.png',
      address: '地址地址地址地址地址',
      contact: '张',
      tel: '13666553333',
      notes: '详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述',
      createdDate: '2017-11-29',
      counts: 10533,
    }
  ];
  filterKeywords = {
    title: ''
  };
  searchInput = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InternetWorkPage');
  }

  searchItems() {
    this.filterKeywords.title = this.searchInput;
  }

  detail(item) {
    this.navCtrl.push('InternetWorkDetailPage', { item: item });
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
