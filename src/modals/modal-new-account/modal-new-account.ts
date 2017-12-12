import { Component } from '@angular/core';
import {
    IonicPage,
    NavParams,
    ViewController,
    ModalController
} from 'ionic-angular';
import { LoginServiceProvider } from '../../providers/login-service/login-service';
import { Md5 } from 'ts-md5/dist/md5';

let weui = require('../../assets/js/weui.js')
declare var require;
@IonicPage()
@Component({
    selector: 'modal-new-account',
    templateUrl: './modal-new-account.html'
})
export class NewAccount {
    public pwdType = 'password';
    public showPass = false;
    public agree = true;
    public smsCodeText = '获取验证码';
    public smsCodeCounts = 60;
    public item = {
        name: '',
        tel: '',
        pwd: undefined,
        smscode: '',
    }
    public pwd = '';
    public codeForVerify: any;
    labelForShow = {
        name: '昵称',
        tel: '手机号码',
        pwd: '密码',
        smscode: '验证码'
    };

    constructor(
        public viewCtrl: ViewController,
        navParams: NavParams,
        public modalCtrl: ModalController,
        public loginService: LoginServiceProvider,
    ) {
    }

    ionViewDidLoad() {
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }

    showPassword() {
        this.showPass = !this.showPass;

        if (this.showPass) {
            this.pwdType = 'text';
        } else {
            this.pwdType = 'password';
        }
    }

    signAgreement() {
        this.agree = !this.agree;
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

    completeAccountInfo() {
        console.log(this.item);
        if (this.item.smscode == this.codeForVerify) {
            console.log("verify passed");
            this.item.pwd = Md5.hashStr(this.pwd);
            this.loginService.register(this.item).then(
                (res) => {
                    if (res.result == 'fail') {
                        weui.alert(res.data, function () {
                            console.log('ok')
                        }, {
                            title: '注册失败'
                        });
                    } else if (res.result == 'success') {
                        this.viewCtrl.dismiss();
                    }
                }
            );
        } else {
            console.log('err smscode');
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
        this.completeAccountInfo();
    }

}