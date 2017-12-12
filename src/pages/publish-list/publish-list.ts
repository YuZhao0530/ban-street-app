import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { UserServicesProvider } from '../../providers/user-services/user-services';
/**
 * Generated class for the PublishListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-publish-list',
  templateUrl: 'publish-list.html',
})
export class PublishListPage {
  user: any;
  list = [];
  dataStructure = {
		secondhandCar: '二手车',
		mall: '电商平台',
		housekeepingHousemaid: '保姆/月嫂',
		secondhandHouse: '二手房',
		housekeepingMoveHouse: '搬家',
		// tourism: '周边旅游',
		carpooling: '拼车',
		secondhandGoods: '二手设备',
		internetWork: '互联网',
		housekeepingCleaning: '保洁清洗',
		housekeepingPartTimeWorker: '钟点工',
		housekeepingUnlock: '开锁换锁',
		housekeepingApplianceRepair: '修家电',
		housekeepingFurnitureRepair: '修家具',
		housekeepingHouseMaintenance: '房屋维修',
		housekeepingDecoration: '装修',
		convenienceInfo: '便民信息',
	};
	types = [];
	type = '';
  constructor(
    public navCtrl: NavController, 
    public loadingCtrl: LoadingController, 
    public navParams: NavParams,
    public userServices: UserServicesProvider
  ) {
    this.user = navParams.get('user');
    this.types = Object.keys(this.dataStructure);
    let loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: '加载中...'
    });

    loading.present();
    this.userServices.publishList(this.user.id).then(
      (res) => {
        if (res.result != 'fail') {
          this.list = res.result;
          this.type = 'secondhandCar';
          setTimeout(() => {
            loading.dismiss();
          }, 500);
        }
      }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PublishListPage');
  }

  detail(page, item) {
		this.navCtrl.push(page, { item: item });
	}

}
