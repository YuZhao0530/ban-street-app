import { Component, ViewChild } from '@angular/core';
import {
	IonicPage,
	NavParams,
	NavController,
	ViewController,
	LoadingController
} from 'ionic-angular';
import { HomeServicesProvider } from '../../providers/home-services/home-services';

@IonicPage()
@Component({
	selector: 'modal-home-search',
	templateUrl: './modal-home-search.html'
})
export class HomeSearch {
	list: any;
	dataStructure = {
		secondhandCar: '二手车',
		mall: '电商平台',
		housekeepingHousemaid: '保姆/月嫂',
		secondhandHouse: '二手房',
		housekeepingMoveHouse: '搬家',
		tourism: '周边旅游',
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
	searchInput = '';
	@ViewChild('searchBar') searchBar: any;

	constructor(
		public viewCtrl: ViewController,
		public navCtrl: NavController,
		navParams: NavParams,
		public loadingCtrl: LoadingController,
		public homeService: HomeServicesProvider
	) {
		this.types = Object.keys(this.dataStructure);
	}
	ngOnInit() {
		setTimeout(() => {
			this.searchBar.setFocus();
		}, 150);
	}

	searchItems() {
		if (this.searchInput != '') {
			let loading = this.loadingCtrl.create({
				spinner: 'bubbles',
				content: '加载中...'
			});

			loading.present();
			this.homeService.homeSearch(this.searchInput).then(
				(res) => {
					if (res.result != 'fail') {
						this.list = res.result;
						this.type = 'secondhandCar'
						setTimeout(() => {
							loading.dismiss();
						}, 500);
					}
				}
			);
		} else {
			this.type = '';
			this.list = [];
		}
	}

	checkForMore(page, type) {
		if (page == 'HousekeepingListPage') {
			this.navCtrl.push(page, { dataType: type });
		} else {
			this.navCtrl.push(page);
		}
	}

	detail(page, item) {
		this.navCtrl.push(page, { item: item });
	}

}