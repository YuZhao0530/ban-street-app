import { Component, ViewChild } from '@angular/core';
import {
	IonicPage,
	NavParams,
	ViewController,
	ModalController,
	LoadingController
} from 'ionic-angular';
import { CarServicesProvider } from '../../providers/car-services/car-services';

@IonicPage()
@Component({
	selector: 'modal-tri',
	templateUrl: './modal-tri.html'
})
export class Tri {
	brands = [];
	selectedBrand: any;
	types = [];
	selectedType: any;
	cars = [];
	selectedCar: any;
	searchInput = '';
	filterKeyword = '';
	type = '';
	@ViewChild('slidesEl') slidesEl: any;

	constructor(
		public viewCtrl: ViewController,
		navParams: NavParams,
		public modalCtrl: ModalController,
		public carServices: CarServicesProvider,
		private loadingCtrl: LoadingController
	) {
		this.brands = navParams.get('brands');
		this.type = navParams.get('type');
	}

	ionViewDidLoad() {
		this.slidesEl.onlyExternal = true;
	}
	
	searchItems() {
		this.filterKeyword = this.searchInput;
	}

	ngOnInit(): void {
		// this.getBrands();
		// console.log(this.brands.length);
	}

	getBrands() {
		let loading = this.loadingCtrl.create({
			content: '加载中...'
		});
		loading.present();
		this.carServices.brands().then(
			(res) => {
				this.brands = res.result;
				setTimeout(() => {
					loading.dismiss();
				}, 500);
			}
		)
	}

	slideToTypes(item){
		this.selectedBrand = item;
		let loading = this.loadingCtrl.create({
			content: '加载中...'
		});
		loading.present();
		this.carServices.types(item.id).then(
			(res) => {
				this.types = res.result;
				this.slidesEl.slideNext();
				setTimeout(() => {
					loading.dismiss();
				}, 500);
			}
		)
	}

	slideToCars(item) {
		if (this.type == 'filter') {
			this.viewCtrl.dismiss(item);
		} else {
			this.selectedType = item;
			let loading = this.loadingCtrl.create({
				content: '加载中...'
			});
			loading.present();
			this.carServices.cars(item.id).then(
				(res) => {
					this.cars = res.result;
					this.slidesEl.slideNext();
					setTimeout(() => {
						loading.dismiss();
					}, 500);
				}
			)
		}
	}

	chooseCar(item) {
		let data = {
			brand: this.selectedBrand,
			type: this.selectedType.fullname,
			car: item
		}
		this.viewCtrl.dismiss(data);
	}

	dismiss() {
		this.viewCtrl.dismiss();
	}

	slidePrev() {
		this.slidesEl.slidePrev();
	}

}