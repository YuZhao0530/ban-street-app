import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { UserServicesProvider } from '../../providers/user-services/user-services';
/**
 * Generated class for the AccountInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
	selector: 'page-account-info',
	templateUrl: 'account-info.html',
})
export class AccountInfoPage {
	user: any;
	photo: any;
	path: string;
	fileTransfer: FileTransferObject = this.transfer.create();
	doRequest = false;

	constructor(
		public navCtrl: NavController,
		public alertCtrl: AlertController,
		public loadingCtrl: LoadingController,
		public userServices: UserServicesProvider,
		public navParams: NavParams,
		private camera: Camera,
		private transfer: FileTransfer
	) {
		this.user = navParams.get('user');
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad AccountInfoPage');
	}

	ionViewWillLeave() {
		if(this.doRequest){
			this.upload();
		}
	}

	submitInfo(loading) {
		console.log('publish go!');
		let u = {
			name: this.user.name,
			photo: this.user.photo,
			pwd: this.user.pwd,
			tel: this.user.tel,
			id: this.user.id,
		}
		console.log(JSON.stringify(u));
		this.userServices.updateAccountInfo(u).then(
			(res) => {
				console.log('success', JSON.stringify(res));
				window.localStorage.setItem('userInfo', JSON.stringify(this.user));
				loading.dismiss();
				// this.navCtrl.pop();
			}
		);
	}

	changeName() {
		let alert = this.alertCtrl.create({
			inputs: [
				{
					name: 'count',
					placeholder: '输入昵称，点击确定完成修改'
				},
			],
			buttons: [
				{
					text: '取消',
					role: 'cancel'
				},
				{
					text: '确定',
					handler: (res: any) => {
						console.log('Input data:', JSON.stringify(res));
						if(res != '' && res != undefined){
							this.user.name = res.count;
							this.doRequest = true;
						}
					}
				}
			]
		});

		alert.present();
	}

	pickPicture() {
		const options: CameraOptions = {
			quality: 90,                                                   //相片质量 0 -100
			destinationType: this.camera.DestinationType.DATA_URL,        //DATA_URL 是 base64   FILE_URL 是文件路径
			encodingType: this.camera.EncodingType.JPEG,
			mediaType: this.camera.MediaType.PICTURE,
			sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,         //是打开相机拍照还是打开相册选择  PHOTOLIBRARY : 相册选择, CAMERA : 拍照,
		}

		this.camera.getPicture(options).then((imageData) => {
			console.log("got file: " + imageData);

			// If it's base64:
			let base64Image = 'data:image/jpeg;base64,' + imageData;
			// this.path = base64Image;
			this.photo = base64Image;
			this.doRequest = true;
			// this.imageArray.push(this.path);

			//If it's file URI
			// this.path = imageData;

			// this.upload();

		}, (err) => {
			// Handle error
		});
	}
	tempname = '';
	upload() {
		const apiPath = "http://112.74.33.126/ban-street/uploadImage.php";
		console.log();
		let d = new Date().getTime();
		let loading = this.loadingCtrl.create({
			spinner: 'bubbles',
			content: '上传中...'
		});

		loading.present();
		this.tempname = new Date().getTime() + '.jpg'
		let options: FileUploadOptions = {
			fileKey: 'file',
			fileName: this.tempname,   //文件名称
			chunkedMode: false,
			mimeType: "multipart/form-data",
			params: {
				dir: d
			}
		};
		this.tempname = d + '/' + this.tempname;
		this.fileTransfer.upload(this.photo, apiPath, options)
			.then((data) => {
				console.log(JSON.stringify(data));
				this.user.photo= "http://112.74.33.126/ban-street/imgs/" + this.tempname;
				console.log(this.user.photo);
				this.submitInfo(loading);
			}, (err) => {
				console.log(JSON.stringify(err));
			});
	}

}
