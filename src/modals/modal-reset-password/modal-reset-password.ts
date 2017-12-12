import { Component } from '@angular/core';
import {
	IonicPage,
	NavParams,
	ViewController,
	LoadingController
} from 'ionic-angular';
import { LoginServiceProvider } from '../../providers/login-service/login-service';
import { Md5 } from 'ts-md5/dist/md5';

let weui = require('../../assets/js/weui.js')
declare var require;
@IonicPage()
@Component({
	selector: 'modal-reset-password',
	templateUrl: './modal-reset-password.html'
})
export class ResetPassword {
	public type = 'password';
	public showPass = false;
	public smsCodeText = '获取验证码';
	public smsCodeCounts = 60;
	public item = {
		tel: '',
		smscode: '',
		pwd: undefined
	};
	public pwd = '';
	labelForShow = {
        tel: '手机号码',
        pwd: '密码',
        smscode: '验证码'
    };
	codeForVerify: any;

	constructor(
		public viewCtrl: ViewController,
		navParams: NavParams,
		public loginService: LoginServiceProvider,
		public loadingCtrl: LoadingController
	) {
	}

	resetPassword() {
		let loading = this.loadingCtrl.create({
			spinner: 'bubbles',
			content: '加载中...'
		});

		loading.present();
		this.item.pwd = Md5.hashStr(this.pwd);
		this.loginService.resetPwd(this.item).then(
			(res) => {
				if (res.result == 'fail') {
					console.log(res.data);
					loading.dismiss();
					weui.alert(res.data, () => {
						console.log('ok');
					}, {
							title: '找回密码失败'
					});
				} else if (res.result == 'success') {
					console.log(res.data);
					loading.dismiss();
					weui.alert('请进行登录', () => {
						console.log('ok');
						this.viewCtrl.dismiss();
					}, {
							title: '成功找回密码'
					});
				}
			}
		);
	}

	showPassword() {
		this.showPass = !this.showPass;

		if (this.showPass) {
			this.type = 'text';
		} else {
			this.type = 'password';
		}
	}

	getSmsCode() {
		if (this.item.tel != '') {
			this.loginService.getSmscode(this.item.tel).then(
				(res) => {
					console.log(JSON.stringify(res));
					this.codeForVerify = res.obj;
				}
			);
			let s = setInterval(() => {
				this.smsCodeText = this.smsCodeCounts + '秒后重新获取';
				this.smsCodeCounts--;
				if (this.smsCodeCounts < 0) {
					clearInterval(s);
					this.smsCodeCounts = 60;
					this.smsCodeText = '获取验证码';
				}
			}, 1000)
		} else {
			console.log('please type in tel');
			weui.topTips('请填写手机号码', {
				duration: 2000,
				className: "custom-classname",
				callback: function () {
					console.log('close');
				}
			});
		}
	}

	showItem() {
        let l = Object.keys(this.item);
        for (let i = 0; i < l.length; i++) {
            if (this.item[l[i]] == '') {
                weui.topTips('请填写正确的' + this.labelForShow[l[i]], {
                    duration: 2000,
                    className: "custom-classname",
                    callback: function () {
                        console.log('close');
                    }
                });
                return false
            } else if (this.item[l[i]] == undefined && this.pwd == '') {
                weui.topTips('请填写正确的' + this.labelForShow[l[i]], {
                    duration: 2000,
                    className: "custom-classname",
                    callback: function () {
                        console.log('close');
                    }
				});
				return false
            }
        }
        this.resetPassword();
    }

}