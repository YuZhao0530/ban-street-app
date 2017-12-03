import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  list = [
    {
      title: '二手标题二手标题二手标题二手标题二手标题二手标题二手标题',
      price: 168,
      photos: ['assets/imgs/logo.png','assets/imgs/logo.png','assets/imgs/logo.png'],
      publisher: '张',
      tel: '13666553333',
      notes: '详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述',
      createdDate: '2017-11-29',
      counts: 10533,
    },
    {
      title: '搜索二手标题二手标题二手标题二手标题二手标题二手标题二手标题',
      price: 168,
      photos: ['assets/imgs/logo.png','assets/imgs/logo.png','assets/imgs/logo.png'],
      publisher: '张',
      tel: '13666553333',
      notes: '详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述',
      createdDate: '2017-11-29',
      counts: 10533,
    },
  ];
  filterKeywords = {
    title: ''
  };
  searchInput = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecondhandGoodsPage');
  }

  searchItems() {
    this.filterKeywords.title = this.searchInput;
  }

  detail(item) {
    this.navCtrl.push('SecondhandGoodsDetailPage', { item: item });
  }

}
