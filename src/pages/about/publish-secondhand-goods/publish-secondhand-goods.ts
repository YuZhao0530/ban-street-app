import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { PublishServicesProvider } from '../../../providers/publish-services/publish-services';

/**
 * Generated class for the PublishSecondhandGoodsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let weui = require('../../../assets/js/weui.js')
declare var require;
@IonicPage()
@Component({
  selector: 'page-publish-secondhand-goods',
  templateUrl: 'publish-secondhand-goods.html',
})
export class PublishSecondhandGoodsPage {
  item = {
    title: '',
    price: '',
    notes: '',
    publisher: JSON.parse(localStorage.getItem('userInfo')).id,
    contact: JSON.parse(localStorage.getItem('userInfo')).name,
    tel: JSON.parse(localStorage.getItem('userInfo')).tel
  };
  labelForShow = {
    title: '标题',
    price: '价格',
    notes: '描述',
    publisher: '联系人',
    tel: '联系电话',
  };
  path: string;
  fileTransfer: FileTransferObject = this.transfer.create();
  public imageArray = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public publishService: PublishServicesProvider,
    public loadingCtrl: LoadingController,
    private camera: Camera,
    private transfer: FileTransfer
  ) {
    this.item.publisher = JSON.parse(localStorage.getItem('userInfo')).id;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PublishSecondhandGoodsPage');
  }

  submitInfo(loading) {
    console.log('publish go!');
    this.publishService.publishSecondhandGoods(this.item).then(
      (res) => {
        console.log('success', JSON.stringify(res));
        loading.dismiss();
        weui.toast('发布成功', 1500);
        this.navCtrl.pop();
      }
    );
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
      this.path = base64Image;
      this.imageArray.push(this.path);

      //If it's file URI
      // this.path = imageData;

      // this.upload();

    }, (err) => {
      // Handle error
    });
  }

  imageViewer(url) {
    let gallery = weui.gallery(url, {
      onDelete: () => {
        weui.confirm('确定删除该图片？', () => {
          let index;
          for (let i = 0; i < this.imageArray.length; ++i) {
            let file = this.imageArray[i];
            if (file == url) {
              index = i;
              break;
            }
          }
          if (index !== undefined) this.imageArray.splice(index, 1);

          gallery.hide();
        });
      }
    });
  }

  /**
     * 文件上传
     */
  upload() {
    const apiPath = "http://112.74.33.126/ban-street/uploadImage.php";
    console.log();
    let d = new Date().getTime();
    let loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: '上传中...'
    });

    loading.present();
    for (let i = 0; i < this.imageArray.length; i++) {
      let options: FileUploadOptions = {
        fileKey: 'file',
        fileName: new Date().getTime() + '.jpg',   //文件名称
        chunkedMode: false,
        mimeType: "multipart/form-data",
        params: {
          dir: d
        }
      };

      this.fileTransfer.upload(this.imageArray[i], apiPath, options)
        .then((data) => {
          console.log(JSON.stringify(data));
          if (i == (this.imageArray.length - 1)) {
            console.log('no.' + i);
            this.item['imageUrl'] = d;
            this.submitInfo(loading);
          }
        }, (err) => {
          console.log(JSON.stringify(err));
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
      }
    }
    if (this.imageArray.length < 1) {
      weui.topTips('请至少选择一张图片', {
        duration: 2000,
        className: "custom-classname",
        callback: function () {
          console.log('close');
        }
      });
      return
    }
    this.upload();
  }

}
