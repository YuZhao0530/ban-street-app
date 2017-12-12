import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { DateTime } from 'ionic-angular/components/datetime/datetime';
import { PublishServicesProvider } from '../../../providers/publish-services/publish-services';
/**
 * Generated class for the PublishCarpoolingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

let weui = require('../../../assets/js/weui.js')
let $ = require('../../../assets/js/jquery.min.js')
declare var require;
@IonicPage()
@Component({
  selector: 'page-publish-carpooling',
  templateUrl: 'publish-carpooling.html',
})
export class PublishCarpoolingPage {
  item = {
    type: '',
    departureTime: '',
    departureLocation: '',
    destination: '',
    model: '',
    seats: '',
    num: '',
    notes: '',
    publisher: JSON.parse(localStorage.getItem('userInfo')).id,
    contact: JSON.parse(localStorage.getItem('userInfo')).name,
    tel: JSON.parse(localStorage.getItem('userInfo')).tel
  };
  labelForShow = {
    driver: {
      departureLocation: '出发地点',
      destination: '目的地',
      departureTime: '出发时间',
      model: '车型',
      seats: '空余座位',
      contact: '联系人',
      tel: '联系电话',
      notes: '详细信息'
    },
    passenger: {
      departureLocation: '出发地点',
      destination: '目的地',
      departureTime: '出发时间',
      num: '人数需求',
      contact: '联系人',
      tel: '联系电话',
      notes: '详细信息'
    }
  };
  public models = [
    {
      label: '轿车',
      value: 0,
    },
    {
      label: 'SUV',
      value: 1,
    },
    {
      label: 'MPV',
      value: 2,
    },
    {
      label: '跑车',
      value: 3,
    },
    {
      label: '巴士',
      value: 4,
    }
  ];
  public seats = [
    {
      label: '1座',
      value: 0,
    },
    {
      label: '2座',
      value: 1,
    },
    {
      label: '3座',
      value: 2,
    },
    {
      label: '4座',
      value: 3,
    },
    {
      label: '4座以上',
      value: 4,
    },
  ];
  public nums = [
    {
      label: '1人',
      value: 0,
    },
    {
      label: '2人',
      value: 1,
    },
    {
      label: '3人',
      value: 2,
    },
    {
      label: '4人',
      value: 3,
    },
    {
      label: '4人以上',
      value: 4,
    },
  ];
  hours = [];
  minites = [
    {
      label: '00',
      value: 0,
    },
    {
      label: '10',
      value: 1,
    },
    {
      label: '20',
      value: 2,
    },
    {
      label: '30',
      value: 3,
    },
    {
      label: '40',
      value: 4,
    },
    {
      label: '50',
      value: 5,
    },
  ];

  symbol = [{ label: ':', value: 0 }];
  @ViewChild('aboutDatetime') aboutDatetime: DateTime;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public publishService: PublishServicesProvider,
  ) {
    this.item.type = navParams.get('type');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PublishCarpoolingPage');
  }

  submitInfo() {
    console.log('publish go!');
    console.log(JSON.stringify(this.item));
    let loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: '上传中...'
    });

    loading.present();
    this.publishService.publishCarpooling(this.item).then(
      (res) => {
        console.log('success', JSON.stringify(res));
        loading.dismiss();
        weui.toast('发布成功', 1500);
        this.navCtrl.pop();
      }
    );
  }

  showItem() {
    let l = Object.keys(this.labelForShow[this.item.type]);
    for (let i = 0; i < l.length; i++) {
      if (this.item[l[i]] == '') {
        weui.topTips('请填写正确的' + this.labelForShow[this.item.type][l[i]], {
          duration: 2000,
          className: "custom-classname",
          callback: function () {
            console.log('close');
          }
        });
        return false
      }
    }
    this.submitInfo();
  }

  openDatePicker() {
    weui.datePicker({
      start: new Date(),
      end: 2030,
      defaultValue: [new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate()],
      onConfirm: (result) => {
        // 二级调用：时间
        $('.ma_expect_date_picker .weui-picker').on('animationend webkitAnimationEnd', () => {
          this.show_expect_time_picker(result);
        });
      },
      container: 'page-publish-carpooling',
      id: 'ma_expect_date1',
      className: 'ma_expect_date_picker'
    });
  }

  show_expect_time_picker(date) {
    console.log('in');
    var date = date[0].label + date[1].label + date[2].label;
    if (!this.hours.length) {
      for (var i = 0; i < 24; i++) {
        var hours_item = {};
        hours_item['label'] = ('' + i).length === 1 ? '0' + i : '' + i;
        hours_item['value'] = i;
        this.hours.push(hours_item);
      }
    }
    weui.picker(
      this.hours,
      this.symbol,
      this.minites,
      {
        defaultValue: [new Date().getHours() + 1, 0, 0],
        container: 'page-publish-carpooling',
        onConfirm: (result) => {
          var time = result[0].label + ':' + result[2].label;
          var expect_date = date + ' ' + time;
          this.item.departureTime = expect_date;
        },
        id: 'ma_expect_time2'
      }
    );
  }

  openSinglePicker(data,type) {
    console.log(JSON.stringify(data));
    console.log(type);
    weui.picker(
      data,
      {
        defaultValue: [0],
        className: 'custom-classname',
        container: 'page-publish-carpooling',
        onConfirm: (result) => {
          this.item[type] = result[0].label;
        },
        id: type + 'PickerForPublishCarpooling'
      }
    );
  }
}
