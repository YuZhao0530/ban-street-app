import { Component } from '@angular/core';
import { NavController, ModalController, LoadingController } from 'ionic-angular';

let weui = require('../../assets/js/weui.js')
declare var require;
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public loadingCtrl: LoadingController
  ) {

  }

  driverOrPassenger() {
    weui.actionSheet(
      [
        {
          label: '我是车主',
          onClick: () => {
            this.navCtrl.push('PublishCarpoolingPage', { type: 'driver' });
            console.log('车主');
          }
        }, {
          label: '我是乘客',
          onClick: () => {
            this.navCtrl.push('PublishCarpoolingPage', { type: 'passenger' });
            console.log('乘客');
          }
        }
      ]
    );
  }

  chooseType() {
    let productsModal = this.modalCtrl.create('List', {
      list: [
        '搬家',
        '保姆/月嫂',
        '钟点工',
        '保洁清洗',
        '房屋维修',
        '修家电',
        '修家具',
        '开锁换锁',
        '装修'
      ]
    });
    productsModal.onDidDismiss(res => {
      let v = {
        '搬家': 'moveHouse',
        '保姆/月嫂': 'housemaid',
        '钟点工': 'partTimeWorker',
        '保洁清洗': 'cleaning',
        '房屋维修': 'houseMaintenance',
        '修家电': 'applianceRepair',
        '修家具': 'furnitureRepair',
        '开锁换锁': 'unlock',
        '装修': 'decoration'
      }
      console.log(res);
      if (res) {
        this.navCtrl.push('PublishHousekeepingPage', { type: v[res.data], loading: res.loading });
      }
    });
    productsModal.present();
  }

  publish(page) {
    this.navCtrl.push('Publish' + page);
  }
}
