import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MallPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mall',
  templateUrl: 'mall.html',
})
export class MallPage {
  list = [
    {
      title: '牛肉干牛肉干牛肉干牛肉干牛肉干牛肉干牛肉干牛肉干牛肉干',
      price: 168,
      address: '内蒙',
      photos: ['assets/imgs/logo.png','assets/imgs/logo.png','assets/imgs/logo.png'],
      publisher: '张',
      tel: '13666553333',
      notes: '详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述',
      createdDate: '2017-11-29',
      sold: 10533,
    },
    {
      title: '奶茶奶茶奶茶奶茶奶茶奶茶奶茶奶茶奶茶奶茶',
      price: 168,
      address: '内蒙',
      photos: ['assets/imgs/logo.png','assets/imgs/logo.png','assets/imgs/logo.png'],
      publisher: '张',
      tel: '13666553333',
      notes: '详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述',
      createdDate: '2017-11-29',
      sold: 10533,
    },
  ];
  filterKeywords = {
    title: ''
  };
  searchInput = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MallPage');
  }

  searchItems() {
    this.filterKeywords.title = this.searchInput;
  }

  detail(item) {
    this.navCtrl.push('MallDetailPage', { item: item });
  }

}
