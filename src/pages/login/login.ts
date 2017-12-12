import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController } from 'ionic-angular';
import { LoginServiceProvider } from '../../providers/login-service/login-service';
import { Md5 } from 'ts-md5/dist/md5';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

let weui = require('../../assets/js/weui.js')
declare var require;
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  item = {
    tel: '',
    pwd: undefined
  }
  pwd = '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loginService: LoginServiceProvider,
    public modalCtrl: ModalController,
    public loadingCtrl: LoadingController,
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    let loading = this.loadingCtrl.create({
			spinner: 'bubbles',
			content: '加载中...'
		});

		loading.present();
    this.item.pwd = Md5.hashStr(this.pwd);
    this.loginService.login(this.item).then(
      (res) => {
        if(res.result == 'fail'){
          loading.dismiss();
          weui.alert(res.data, () => {
            console.log('ok');
					}, {
							title: '登录失败'
          });
          console.log('my:',this.item.pwd,'server:',res.debug);
        }else if(res.result == 'success'){
          window.localStorage.setItem('userInfo',JSON.stringify(res.data));
          console.log(localStorage.getItem('userInfo'));
          loading.dismiss();
          this.navCtrl.setRoot('TabsPage');
        }
      }
    );
  }

  registerNewAccount() {
    console.log('register');
    let newAccountModal = this.modalCtrl.create('NewAccount');
    newAccountModal.onDidDismiss((data) => {
      console.log(data);
    });
    newAccountModal.present();
  }

  forgetPassword() {
    console.log('forget');
    let resetPasswordModal = this.modalCtrl.create('ResetPassword');
    resetPasswordModal.onDidDismiss((data) => {
      console.log(data);
    });
    resetPasswordModal.present();
  }

}
