import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Events } from 'ionic-angular';
import { HomeServicesProvider } from '../../providers/home-services/home-services';
/**
 * Generated class for the SecondhandHousePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 * 
 * 二手房 secondhandHouse :
 * 标题 title
 * 地址 address
 * 户型 structure parlor bathroom
 * 面积 area
 * 期望售价 price
 * 楼层 floor
 * 朝向 towards 南 西南 东 东南 北 东北 西 西北 南北 东西
 * 装修 decoration 毛坯 简单装修 中等装修 精装修 豪华装修
 * 备注 notes
 * 发布人 publisher
 * 电话 tel
 * 照片 photos
 * 
 */
let weui = require('../../assets/js/weui.js')
declare var require;
@IonicPage()
@Component({
  selector: 'page-secondhand-house',
  templateUrl: 'secondhand-house.html',
})
export class SecondhandHousePage {
  itemList = [
    {
      id: 0,
      title: 'XXXX卖二手房',
      address: 'SSS路XXX小区',
      structure: [3, 2, 1],
      area: 96,
      price: 50,
      floor: 7,
      towards: '北',
      decoration: '中等装修',
      notes: '介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍',
      publisher: '张',
      tel: '13635358888',
      photos: ['assets/imgs/logo.png', 'assets/imgs/logo.png', 'assets/imgs/logo.png'],
    },
    {
      id: 0,
      title: 'AAXX卖二手房',
      address: 'S路XXX小区',
      structure: [2, 1, 1],
      area: 96,
      price: 20,
      floor: 3,
      towards: '南',
      decoration: '简单装修',
      notes: '介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍',
      publisher: '张',
      tel: '13635358888',
      photos: ['assets/imgs/logo.png', 'assets/imgs/logo.png', 'assets/imgs/logo.png'],
    },
    {
      id: 0,
      title: 'XBX卖二手房',
      address: 'XASX路DDXX小区',
      structure: [1, 1, 1],
      area: 96,
      price: 70,
      floor: 4,
      towards: '东',
      decoration: '简单装修',
      notes: '介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍',
      publisher: '张',
      tel: '13635358888',
      photos: ['assets/imgs/logo.png', 'assets/imgs/logo.png', 'assets/imgs/logo.png'],
    },
    {
      id: 0,
      title: 'XXNMX卖二手房',
      address: 'XLKKK路XOO小区',
      structure: [5, 2, 1],
      area: 96,
      price: 90,
      floor: 3,
      towards: '南北',
      decoration: '简单装修',
      notes: '介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍',
      publisher: '张',
      tel: '13635358888',
      photos: ['assets/imgs/logo.png', 'assets/imgs/logo.png', 'assets/imgs/logo.png'],
    },
    {
      id: 0,
      title: 'XXTYH卖二手房',
      address: 'XIK路XJJJX小区',
      structure: [3, 2, 1],
      area: 96,
      price: 130,
      floor: 3,
      towards: '南北',
      decoration: '豪华装修',
      notes: '介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍',
      publisher: '张',
      tel: '13635358888',
      photos: ['assets/imgs/logo.png', 'assets/imgs/logo.png', 'assets/imgs/logo.png'],
    },
  ];
  searchInput = '';
  filterKeywords = {
    title: '',
    price: { label: '', value: undefined },
    bedroom: { label: '', value: undefined },
    floor: { label: '', value: undefined },
    towards: { label: '', value: undefined },
    decoration: { label: '', value: undefined }
  };
  defaltKeywords = {
    price: '总价',
    bedroom: '厅室'
  };
  dataForSinglePicker = {
    price: [
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
    ],
    bedroom: [
      {
        label: '不限',
        value: 0
      },
      {
        label: '1室',
        value: 1
      },
      {
        label: '2室',
        value: 2
      },
      {
        label: '3室',
        value: 3
      },
      {
        label: '4室',
        value: 4
      },
      {
        label: '4室以上',
        value: 5
      }
    ]
  };
  dataForMultiPicker = [
    [
      {
        label: '不限楼层',
        value: 0
      },
      {
        label: '1层',
        value: 1
      },
      {
        label: '2层',
        value: 2
      },
      {
        label: '3层',
        value: 3
      },
      {
        label: '4层',
        value: 4
      },
      {
        label: '5层',
        value: 5
      },
      {
        label: '6层',
        value: 6
      },
      {
        label: '6层以上',
        value: 7
      }
    ],
    [
      {
        label: '不限朝向',
        value: 0
      },
      {
        label: '南',
        value: '南'
      },
      {
        label: '西南',
        value: '西南'
      },
      {
        label: '东',
        value: '东南'
      },
      {
        label: '北',
        value: '东北'
      },
      {
        label: '西',
        value: '西'
      },
      {
        label: '西北',
        value: '西北'
      },
      {
        label: '南北',
        value: '南北'
      },
      {
        label: '东西',
        value: '东西'
      },
    ],
    [
      {
        label: '不限装修',
        value: 0
      },
      {
        label: '毛坯',
        value: '毛坯'
      },
      {
        label: '简单装修',
        value: '简单装修'
      },
      {
        label: '中等装修',
        value: '中等装修'
      },
      {
        label: '精装修',
        value: '精装修'
      },
      {
        label: '豪华装修',
        value: '豪华装修'
      }
    ]
  ];
  list = [];
  page = 1;
  totalPage = 1;
  noMore = false;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public homeServices: HomeServicesProvider,
    public events: Events
  ) {
    this.getList();
    events.subscribe('secondhandHouseFiltered:not enough items', () => {
      if (this.page < this.totalPage) {
        this.moreList(null);
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecondhandHousePage');
  }

  getList() {
    this.page = 1;
    let loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: '加载中...'
    });
    loading.present();
    this.homeServices.getSecondhandHouseList(this.page).then(
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
    this.homeServices.getSecondhandHouseList(this.page).then(
      (res) => {
        this.list = this.list.concat(res.result);
        if (infiniteScroll) {
          infiniteScroll.complete();
        }
      }
    );
  }

  detail(item) {
    this.navCtrl.push('SecondhandHouseDetailPage', { item: item });
  }

  searchItems() {
    this.filterKeywords.title = this.searchInput;
  }

  openSinglePicker(type) {
    weui.picker(
      this.dataForSinglePicker[type],
      {
        defaultValue: [this.filterKeywords[type].value || 0],
        className: 'custom-classname',
        container: 'page-secondhand-house',
        onConfirm: (result) => {
          if (result[0].value != 0) {
            this.filterKeywords[type] = result[0];
          } else {
            this.filterKeywords[type] = { label: '', value: undefined };
          }
          console.log(result[0], this.filterKeywords);
        },
        id: type + 'PickerForSecondHouse'
      }
    );
  }

  openMultiPicker() {
    weui.picker(
      this.dataForMultiPicker[0],
      this.dataForMultiPicker[1],
      this.dataForMultiPicker[2],
      {
        defaultValue: [
          this.filterKeywords.floor.value || 0,
          this.filterKeywords.towards.value || 0,
          this.filterKeywords.decoration.value || 0
        ],
        className: 'custom-classname',
        container: 'page-secondhand-house',
        onConfirm: (result) => {
          if (result[0].value != 0) {
            this.filterKeywords.floor = result[0];
          } else {
            this.filterKeywords.floor = { label: '', value: undefined };
          }
          if (result[1].value != 0) {
            this.filterKeywords.towards = result[1];
          } else {
            this.filterKeywords.towards = { label: '', value: undefined };
          }
          if (result[2].value != 0) {
            this.filterKeywords.decoration = result[2];
          } else {
            this.filterKeywords.decoration = { label: '', value: undefined };
          }
          console.log(result, this.filterKeywords);
        },
        id: 'secondHouseMultiPicker'
      }
    );
  }

}
