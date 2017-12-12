import { Component } from '@angular/core';
import {
  IonicPage,
  NavParams,
  NavController,
  ModalController,
  LoadingController
} from 'ionic-angular';
import { Events } from 'ionic-angular';
import { HomeServicesProvider } from '../../providers/home-services/home-services';
import { CarServicesProvider } from '../../providers/car-services/car-services';
/**
 * Generated class for the SecondhandCarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 * 
 * 品牌 三级
 * 行驶里程
 * 颜色
 * 价格
 * 看车地址
 * 联系人
 * 联系电话
 * 
 * 
 */
let weui = require('../../assets/js/weui.js')
declare var require;
@IonicPage()
@Component({
  selector: 'page-secondhand-car',
  templateUrl: 'secondhand-car.html',
})
export class SecondhandCarPage {
  list = [];
  filterKeywords = {
    type: undefined,
    title: '',
    price: {
      label: '',
      value: undefined,
    }
  };
  price = [
    {
      label: '不限',
      value: 0
    },
    {
      label: '30万以下',
      value: 30
    },
    {
      label: '30-60万',
      value: 60
    },
    {
      label: '60-90万',
      value: 90
    },
    {
      label: '90-120万',
      value: 120
    },
    {
      label: '120万以上',
      value: 121
    }
  ];
  searchInput = '';
  page = 1;
  totalPage = 1;
  noMore = false;

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public loadingCtrl: LoadingController,
    public navParams: NavParams,
    public events: Events,
    public carServices: CarServicesProvider,
    public homeServices: HomeServicesProvider,
  ) {
    events.subscribe('carFiltered:not enough items', () => {
      if (this.page < this.totalPage) {
        this.moreList(null);
      }
    });
    this.getList();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecondhandCarPage');
  }

  getList() {
    this.page = 1;
    let loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: '加载中...'
    });
    loading.present();
    this.homeServices.getSecondhandCarList(this.page).then(
      (res) => {
        this.list = res.result;
        this.totalPage = Math.ceil(parseInt(res.totalPage) / 20);
        if (this.totalPage < 2) {
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
    if (this.page == this.totalPage) {
      this.noMore = true;
    }
    this.homeServices.getSecondhandCarList(this.page).then(
      (res) => {
        this.list = this.list.concat(res.result);
        if (infiniteScroll) {
          infiniteScroll.complete();
        }
      }
    );
  }

  detail(item) {
    this.navCtrl.push('SecondhandCarDetailPage', { item: item });
  }

  searchItems() {
    this.filterKeywords.title = this.searchInput;
  }

  openBrands() {
    let productsModal: any;
    let loading = this.loadingCtrl.create({
      content: '加载中...'
    });
    loading.present();
    this.carServices.brands().then(
      (res) => {
        if (res.status != 0) {

        } else {
          productsModal = this.modalCtrl.create('Tri', { brands: res.result, type: 'filter' });
          productsModal.onDidDismiss(
            (data) => {
              console.log(JSON.stringify(data));
              if (data != undefined) {
                this.filterKeywords.type = data.fullname;
              } else {
                this.filterKeywords.type = undefined;
              }
            }
          )
          productsModal.present();
          setTimeout(() => {
            loading.dismiss();
          }, 500);
        }
      }
    );
  }

  openSinglePicker() {
    weui.picker(
      this.price,
      {
        defaultValue: [this.filterKeywords.price.value || 0],
        className: 'custom-classname',
        container: 'page-secondhand-car',
        onConfirm: (result) => {
          if (result[0].value != 0) {
            this.filterKeywords.price = result[0];
          } else {
            this.filterKeywords.price = { label: '', value: undefined };
          }
          console.log(result[0], this.filterKeywords);
        },
        id: 'pricePickerForSecondhandCar'
      }
    );
  }

}
