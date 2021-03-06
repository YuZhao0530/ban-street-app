import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Events } from 'ionic-angular';
import { HomeServicesProvider } from '../../providers/home-services/home-services';
/**
 * Generated class for the SecondhandGoodsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 * 
 * 二手设备
 * titile
 * price
 * notes
 * photos
 * publisher
 * tel
 * createdDate
 * counts
 */

@IonicPage()
@Component({
  selector: 'page-secondhand-goods',
  templateUrl: 'secondhand-goods.html',
})
export class SecondhandGoodsPage {
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
    console.log('ionViewDidLoad SecondhandGoodsPage');
  }

  getList() {
    this.page = 1;
    let loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: '加载中...'
    });
    loading.present();
    this.homeServices.getSecondhandGoodsList(this.page).then(
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
    this.homeServices.getSecondhandGoodsList(this.page).then(
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
    this.navCtrl.push('SecondhandGoodsDetailPage', { item: item });
  }

}
