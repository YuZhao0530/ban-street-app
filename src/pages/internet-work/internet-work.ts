import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { Events } from 'ionic-angular';
import { HomeServicesProvider } from '../../providers/home-services/home-services';

/**
 * Generated class for the InternetWorkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 * 互联网 InternetWork
 * 
 * 标题 title
 * 地址 address
 * 商家名称 contact
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
  list = [];
  filterKeywords = {
    title: ''
  };
  searchInput = '';
  page = 1;
  totalPage = 1;
  noMore = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public homeServices: HomeServicesProvider,
    private callNumber: CallNumber,
    public events: Events
  ) {
    events.subscribe('housekeepingFiltered:not enough items', () => {
      if (this.page < this.totalPage) {
        this.moreList(null);
      }
    });
    this.getList();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InternetWorkPage');
  }

  getList() {
    this.page = 1;
    let loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: '加载中...'
    });
    loading.present();
    this.homeServices.getInternetWorkList(this.page).then(
      (res) => {
        this.list = res.result;
        this.totalPage = Math.ceil(parseInt(res.totalPage) / 20);
        if(this.totalPage < 2){
          this.noMore = true;
        }
        loading.dismiss();
        console.log('totalPage', this.totalPage);
      }
    );
  }

  moreList(infiniteScroll) {
    console.log('more list');
    this.page++;
    if(this.page == this.totalPage){
      this.noMore = true;
    }
    this.homeServices.getInternetWorkList(this.page).then(
      (res) => {
        this.list = this.list.concat(res.result);
        if (infiniteScroll) {
          infiniteScroll.complete();
        }
      }
    );
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
        onClick: () => {
          this.callNumber.callNumber(tel, true)
          .then()
          .catch();
        }
      }]
    });
  }

}
