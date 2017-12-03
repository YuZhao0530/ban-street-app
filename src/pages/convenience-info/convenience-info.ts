import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  list = [
    {
      content: '内容内容内容内容内容内容内容内容内容内容内容一内容内容内容内容内容内容内容内容内容内容内容',
      publisher: '张二',
      createdDate: '2017-11-11',
      photos: ['assets/imgs/logo.png','assets/imgs/logo.png','assets/imgs/logo.png'],
    },
    {
      content: '内容内容内容内容内容内容内容内容内容内容内容二内容内容内容内容内容内容内容内容内容内容内容',
      publisher: '张一',
      createdDate: '2017-11-11',
      photos: ['assets/imgs/logo.png','assets/imgs/logo.png','assets/imgs/logo.png'],
    },
    {
      content: '内容内容内容内容内容内容内容内容内容内容内容三内容内容内容内容内容内容内容内容内容内容内容',
      publisher: '张三',
      createdDate: '2017-11-11',
      photos: ['assets/imgs/logo.png','assets/imgs/logo.png','assets/imgs/logo.png'],
    },
    {
      content: '内容内容内容内容内容内容内容内容内容内容内容四内容内容内容内容内容内容内容内容内容内容内容',
      publisher: '张四',
      createdDate: '2017-11-11',
      photos: ['assets/imgs/logo.png','assets/imgs/logo.png','assets/imgs/logo.png'],
    }
  ];
  filterKeywords = {
    contentAndPublisher: ''
  };
  searchInput = '';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConvenienceInfoPage');
  }

  searchItems() {
    this.filterKeywords.contentAndPublisher = this.searchInput;
  }

}
