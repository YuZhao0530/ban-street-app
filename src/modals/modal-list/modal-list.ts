import { Component } from '@angular/core';
import {
	IonicPage,
	NavParams,
	ViewController,
	LoadingController
} from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'modal-list',
	templateUrl: './modal-list.html'
})
export class List {
	list: any;

	constructor(
		public viewCtrl: ViewController, 
		navParams: NavParams,
		public loadingCtrl: LoadingController,
	) {
		this.list = navParams.get('list');
	}

	dismiss(data) {
		let loading = this.loadingCtrl.create({
			spinner: 'bubbles',
			content: '加载中...'
		});

		loading.present();
		this.viewCtrl.dismiss({
			data: data,
			loading: loading
		});
	}

}