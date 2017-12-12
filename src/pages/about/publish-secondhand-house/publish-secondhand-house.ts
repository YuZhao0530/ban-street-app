import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { PublishServicesProvider } from '../../../providers/publish-services/publish-services';
/**
 * Generated class for the PublishSecondhandHousePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 * 
 * 标题 title
 * 地址 address
 * 户型 bedroom parlor bathroom
 * 面积 area
 * 期望售价 price
 * 楼层 floor
 * 朝向 towards 南 西南 东 东南 北 东北 西 西北 南北 东西
 * 装修 decoration 毛坯 简单装修 中等装修 精装修 豪华装修
 * 备注 notes
 * 发布人 publisher
 * 电话 tel
 * 照片 photos
 * 
 */
let weui = require('../../../assets/js/weui.js')
declare var require;
@IonicPage()
@Component({
  selector: 'page-publish-secondhand-house',
  templateUrl: 'publish-secondhand-house.html',
})
export class PublishSecondhandHousePage {
  item = {
    title: '',
    address: '',
    bedroom: '',
    parlor: '',
    bathroom: '',
    area: '',
    price: '',
    floor: '',
    towards: '',
    decoration: '',
    notes: '',
    publisher: JSON.parse(localStorage.getItem('userInfo')).id,
    contact: JSON.parse(localStorage.getItem('userInfo')).name,
    tel: JSON.parse(localStorage.getItem('userInfo')).tel
  };
  labelForShow = {
    title: '标题',
    address: '地址',
    // bedroom: '厅室',
    // parlor: '厅室',
    // bathroom: '厅室',
    area: '面积',
    price: '期望售价',
    floor: '楼层',
    towards: '朝向',
    decoration: '装修',
    notes: '描述',
    publisher: '联系人',
    tel: '联系电话',
  }
  structureForShow = '';
  structureSelected = false;
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
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PublishSecondhandHousePage');
  }

  submitInfo(loading) {
    console.log('publish go!');
    this.publishService.publishSecondhandHouse(this.item).then(
      (res) => {
        console.log('success',JSON.stringify(res));
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
          if(i == (this.imageArray.length - 1)){
            console.log('no.'+i);
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
    if(this.structureForShow == ''){
      weui.topTips('请填写正确的厅室', {
        duration: 2000,
        className: "custom-classname",
        callback: function () {
          console.log('厅室');
        }
      });
      return false
    }
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
    if(this.imageArray.length < 1){
      weui.topTips('请至少选择一张图片', {
        duration: 2000,
        className: "custom-classname",
        callback: function () {
          console.log('close');
        }
      });
      return false
    }
    this.upload();
  }

  chooseStructure() {
    weui.picker(
      [
        {
          label: '0室',
          value: 0
        },
        {
          label: '1室',
          value: 1
        },
        {
          label: '2室',
          value: 2
        },
        {
          label: '3室',
          value: 3
        },
        {
          label: '4室',
          value: 4
        },
        {
          label: '5室',
          value: 5
        },
        {
          label: '6室',
          value: 6
        },
        {
          label: '7室',
          value: 7
        },
        {
          label: '8室',
          value: 8
        },
        {
          label: '9室',
          value: 9
        },
      ],
      [
        {
          label: '0厅',
          value: 0
        },
        {
          label: '1厅',
          value: 1
        },
        {
          label: '2厅',
          value: 2
        },
        {
          label: '3厅',
          value: 3
        },
        {
          label: '4厅',
          value: 4
        },
        {
          label: '5厅',
          value: 5
        },
        {
          label: '6厅',
          value: 6
        },
        {
          label: '7厅',
          value: 7
        },
        {
          label: '8厅',
          value: 8
        },
        {
          label: '9厅',
          value: 9
        },
      ],
      [
        {
          label: '0卫',
          value: 0
        },
        {
          label: '1卫',
          value: 1
        },
        {
          label: '2卫',
          value: 2
        },
        {
          label: '3卫',
          value: 3
        },
        {
          label: '4卫',
          value: 4
        },
        {
          label: '5卫',
          value: 5
        },
        {
          label: '6卫',
          value: 6
        },
        {
          label: '7卫',
          value: 7
        },
        {
          label: '8卫',
          value: 8
        },
        {
          label: '9卫',
          value: 9
        },
      ],
      {
        defaultValue: [0, 0, 0],
        className: 'custom-classname',
        container: 'page-publish-secondhand-house',
        onConfirm: (result) => {
          this.structureForShow = result[0].label + result[1].label + result[2].label;
          this.item.bedroom = result[0].value;
          this.item.parlor = result[1].value;
          this.item.bathroom = result[2].value;
          this.structureSelected = true;
          console.log(this.item);
          console.log(result);
        },
        id: 'publishSecondhandhouseStructurePicker'
      }
    );
  }

  chooseTowards() {
    weui.picker(
      [
        {
          label: '南',
          value: '南'
        },
        {
          label: '西南',
          value: '西南'
        },
        {
          label: '东',
          value: '东'
        },
        {
          label: '东南',
          value: '东南'
        },
        {
          label: '北',
          value: '东北'
        },
        {
          label: '西',
          value: '西'
        },
        {
          label: '西北',
          value: '西北'
        },
        {
          label: '南北',
          value: '南北'
        },
        {
          label: '东西',
          value: '东西'
        }
      ],
      {
        defaultValue: ['南'],
        className: 'custom-classname',
        container: 'page-publish-secondhand-house',
        onConfirm: (result) => {
          this.item.towards = result[0].value;
          console.log(this.item);
          console.log(result);
        },
        id: 'publishSecondhandhouseTowardsPicker'
      }
    );
  }

  chooseDecoration() {
    weui.picker(
      [
        {
          label: '毛坯',
          value: '毛坯'
        },
        {
          label: '简单装修',
          value: '简单装修'
        },
        {
          label: '中等装修',
          value: '中等装修'
        },
        {
          label: '精装修',
          value: '精装修'
        },
        {
          label: '豪华装修',
          value: '豪华装修'
        }
      ],
      {
        defaultValue: ['毛坯'],
        className: 'custom-classname',
        container: 'page-publish-secondhand-house',
        onConfirm: (result) => {
          this.item.decoration = result[0].value;
          console.log(this.item);
          console.log(result);
        },
        id: 'publishSecondhandhouseDecorationPicker'
      }
    );
  }

}
