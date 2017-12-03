import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HousekeepingListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let weui = require('../../assets/js/weui.js')
declare var require;
@IonicPage()
@Component({
  selector: 'page-housekeeping-list',
  templateUrl: 'housekeeping-list.html',
})
export class HousekeepingListPage {
  list: any;
  filterKeywords = {
    title: ''
  };
  searchInput = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.list = navParams.get('list');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HousekeepingListPage');
  }

  searchItems() {
    this.filterKeywords.title = this.searchInput;
  }

  detail(item) {
    this.navCtrl.push('HousekeepingDetailPage', { item: item });
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
