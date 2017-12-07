import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Events } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { HomeServicesProvider } from '../../providers/home-services/home-services';
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
  driversList = [];
  passengersList = [];
  list = [];
  page = 1;
  totalPage = 1;
  noMore = false;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public homeServices: HomeServicesProvider,
    public events: Events,
    private callNumber: CallNumber
  ) {
    events.subscribe('carpoolingFiltered:not enough items', () => {
      if (this.page < this.totalPage) {
        this.moreList(null);
      }
    });
    this.type = 'driver';
    this.getList();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarpoolingPage');
  }

  getList() {
    this.page = 1;
    this.homeServices.getCarpoolingList(this.page).then(
      (res) => {
        this.list = res.result;
        res.result.filter((item) => {
          if(item.type == 'driver'){
            this.driversList.push(item);
          }else if(item.type == 'passenger'){
            this.passengersList.push(item);
          }
        });
        this.totalPage =  Math.ceil(parseInt(res.totalPage) / 10);
        if(this.totalPage < 2){
          this.noMore = true;
        }else{
          if (this.driversList.length < 20 || this.passengersList.length < 20 ) {
            this.events.publish('carpoolingFiltered:not enough items');
          }
        }
        console.log('totalPage',this.totalPage);
      }
    );
  }

  async moreList(infiniteScroll) {
    console.log('more list');
    this.page++;
    if(this.page == this.totalPage){
      this.noMore = true;
    } 
    await this.homeServices.getCarpoolingList(this.page).then(
      (res) => {
        res.result.filter((item) => {
          if(item.type == 'driver'){
            this.driversList.push(item);
          }else if(item.type == 'passenger'){
            this.passengersList.push(item);
          }
        });
        if (this.driversList.length < 20 || this.passengersList.length < 20 ) {
          this.events.publish('carpoolingFiltered:not enough items');
        }
        if(infiniteScroll){
          infiniteScroll.complete();
        }
      }
    );
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
        onClick: () => {
          this.callNumber.callNumber(tel, true)
          .then()
          .catch();
        }
      }]
    });
  }

  checkDetial(item, type) {
    this.navCtrl.push('CarpoolingDetailPage', { item: item, type: type });
  }

}
