import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Events } from 'ionic-angular';
import { HomeServicesProvider } from '../../providers/home-services/home-services';
/**
 * Generated class for the ConvenienceInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 * 
 * 便民信息
 * 内容
 * 图片
 * 发布人
 * 
 */

@IonicPage()
@Component({
  selector: 'page-convenience-info',
  templateUrl: 'convenience-info.html',
})
export class ConvenienceInfoPage {
  list = [];
  filterKeywords = {
    contentAndPublisher: ''
  };
  searchInput = '';
  page = 1;
  totalPage = 1;
  noMore = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    private events: Events,
    public homeServices: HomeServicesProvider
  ) {
    events.subscribe('convenienceInfoFiltered:not enough items', () => {
      if (this.page < this.totalPage) {
        this.moreList(null);
      }
    });
    this.getList();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConvenienceInfoPage');
  }

  getList() {
    this.page = 1;
    let loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: '加载中...'
    });
    loading.present();
    this.homeServices.getConvenienceInfoList(this.page).then(
      (res) => {
        this.list = res.result;
        this.totalPage = Math.ceil(parseInt(res.totalPage) / 20);
        if(this.totalPage < 2){
          this.noMore = true;
        }
        loading.dismiss();
        console.log(this.list);
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
    this.homeServices.getConvenienceInfoList(this.page).then(
      (res) => {
        this.list = this.list.concat(res.result);
        if (infiniteScroll) {
          infiniteScroll.complete();
        }
      }
    );
  }

  searchItems() {
    this.filterKeywords.contentAndPublisher = this.searchInput;
  }

}
