import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Events } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { HomeServicesProvider } from '../../providers/home-services/home-services';
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
    public events: Events,
    private callNumber: CallNumber
  ) {
    events.subscribe('housekeepingFiltered:not enough items', () => {
      if (this.page < this.totalPage) {
        this.moreList(null);
      }
    });
    this.getList();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TourismPage');
  }

  getList() {
    this.page = 1;
    let loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: '加载中...'
    });
    loading.present();
    this.homeServices.getTourismList(this.page).then(
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
    this.homeServices.getTourismList(this.page).then(
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
        onClick: () => {
          this.callNumber.callNumber(tel, true)
          .then()
          .catch();
        }
      }]
    });
  }

}
