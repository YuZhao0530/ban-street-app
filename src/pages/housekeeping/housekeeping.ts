import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HousekeepingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 * 
 * 搬家 moveHouse
 * 保姆月嫂 housemaid
 * 钟点工 partTimeWorker
 * 保洁清洗 cleaning
 * 房屋维修 houseMaintenance
 * 修家电 applianceRepair
 * 修家具 furnitureRepair
 * 开锁换锁 unlock
 * 装修 decoration
 * 
 * 标题 title
 * 类型 type
 * 地址 address
 * 联系人 contact
 * 电话 tel
 * 详细描述 notes
 * counts
 */

@IonicPage()
@Component({
  selector: 'page-housekeeping',
  templateUrl: 'housekeeping.html',
})
export class HousekeepingPage {
  moveHouseList = [
    {
      title: '标题标题标标题标标题标标题标标题标标题标标题标标标标',
      poster: 'assets/imgs/logo.png',
      type: '搬家',
      address: '地址地址地址地址地址',
      contact: '张',
      tel: '13666553333',
      notes: '详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述',
      createdDate: '2017-11-29',
      counts: 10533,
    },
    {
      title: '搜索搜索标索标索标索标索标索标题标题标题标题',
      poster: 'assets/imgs/logo.png',
      type: '搬家',
      address: '地址地址地址地址地址',
      contact: '张',
      tel: '13666553333',
      notes: '详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述',
      createdDate: '2017-11-29',
      counts: 10533,
    }
  ];
  housemaidList = [
    {
      title: '标题标题标标标标',
      poster: 'assets/imgs/logo.png',
      type: '保姆月嫂',
      address: '地址地址地址地址地址',
      contact: '张',
      tel: '13666553333',
      notes: '详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述',
      createdDate: '2017-11-29',
      counts: 10533,
    },
    {
      title: '搜索搜索标题标题标题标题',
      poster: 'assets/imgs/logo.png',
      type: '保姆月嫂',
      address: '地址地址地址地址地址',
      contact: '张',
      tel: '13666553333',
      notes: '详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述',
      createdDate: '2017-11-29',
      counts: 10533,
    }
  ];
  partTimeWorkerList = [
    {
      title: '标题标题标标标标',
      poster: 'assets/imgs/logo.png',
      type: '钟点工',
      address: '地址地址地址地址地址',
      contact: '张',
      tel: '13666553333',
      notes: '详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述',
      createdDate: '2017-11-29',
      counts: 10533,
    },
    {
      title: '搜索搜索标题标题标题标题',
      poster: 'assets/imgs/logo.png',
      type: '钟点工',
      address: '地址地址地址地址地址',
      contact: '张',
      tel: '13666553333',
      notes: '详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述',
      createdDate: '2017-11-29',
      counts: 10533,
    }
  ];
  cleaningList = [
    {
      title: '标题标题标标标标',
      poster: 'assets/imgs/logo.png',
      type: '保洁清洗',
      address: '地址地址地址地址地址',
      contact: '张',
      tel: '13666553333',
      notes: '详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述',
      createdDate: '2017-11-29',
      counts: 10533,
    },
    {
      title: '搜索搜索标题标题标题标题',
      poster: 'assets/imgs/logo.png',
      type: '保洁清洗',
      address: '地址地址地址地址地址',
      contact: '张',
      tel: '13666553333',
      notes: '详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述',
      createdDate: '2017-11-29',
      counts: 10533,
    }
  ];
  houseMaintenanceList = [
    {
      title: '标题标题标标标标',
      poster: 'assets/imgs/logo.png',
      type: '房屋维修',
      address: '地址地址地址地址地址',
      contact: '张',
      tel: '13666553333',
      notes: '详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述',
      createdDate: '2017-11-29',
      counts: 10533,
    },
    {
      title: '搜索搜索标题标题标题标题',
      poster: 'assets/imgs/logo.png',
      type: '房屋维修',
      address: '地址地址地址地址地址',
      contact: '张',
      tel: '13666553333',
      notes: '详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述',
      createdDate: '2017-11-29',
      counts: 10533,
    }
  ];
  applianceRepairList = [
    {
      title: '标题标题标标标标',
      poster: 'assets/imgs/logo.png',
      type: '修家电',
      address: '地址地址地址地址地址',
      contact: '张',
      tel: '13666553333',
      notes: '详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述',
      createdDate: '2017-11-29',
      counts: 10533,
    },
    {
      title: '搜索搜索标题标题标题标题',
      poster: 'assets/imgs/logo.png',
      type: '修家电',
      address: '地址地址地址地址地址',
      contact: '张',
      tel: '13666553333',
      notes: '详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述',
      createdDate: '2017-11-29',
      counts: 10533,
    }
  ];
  furnitureRepairList = [
    {
      title: '标题标题标标标标',
      poster: 'assets/imgs/logo.png',
      type: '修家具',
      address: '地址地址地址地址地址',
      contact: '张',
      tel: '13666553333',
      notes: '详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述',
      createdDate: '2017-11-29',
      counts: 10533,
    },
    {
      title: '搜索搜索标题标题标题标题',
      poster: 'assets/imgs/logo.png',
      type: '修家具',
      address: '地址地址地址地址地址',
      contact: '张',
      tel: '13666553333',
      notes: '详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述',
      createdDate: '2017-11-29',
      counts: 10533,
    }
  ];
  decorationList = [
    {
      title: '标题标题标标标标',
      poster: 'assets/imgs/logo.png',
      type: '装修',
      address: '地址地址地址地址地址',
      contact: '张',
      tel: '13666553333',
      notes: '详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述',
      createdDate: '2017-11-29',
      counts: 10533,
    },
    {
      title: '搜索搜索标题标题标题标题',
      poster: 'assets/imgs/logo.png',
      type: '装修',
      address: '地址地址地址地址地址',
      contact: '张',
      tel: '13666553333',
      notes: '详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述',
      createdDate: '2017-11-29',
      counts: 10533,
    }
  ];
  unlockList = [
    {
      title: '标题标题标标标标',
      poster: 'assets/imgs/logo.png',
      type: '开锁换锁',
      address: '地址地址地址地址地址',
      contact: '张',
      tel: '13666553333',
      notes: '详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述',
      createdDate: '2017-11-29',
      counts: 10533,
    },
    {
      title: '搜索搜索标题标题标题标题',
      poster: 'assets/imgs/logo.png',
      type: '开锁换锁',
      address: '地址地址地址地址地址',
      contact: '张',
      tel: '13666553333',
      notes: '详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述',
      createdDate: '2017-11-29',
      counts: 10533,
    }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HousekeepingPage');
  }

  openList(type) {
    this.navCtrl.push('HousekeepingListPage', { dataType: type });
  }

}
