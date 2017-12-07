import { Injectable } from '@angular/core';

import { LoadingController } from 'ionic-angular';
import { HttpServicesProvider } from '../http-services/http-services';

/*
  Generated class for the HomeServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HomeServicesProvider {

  constructor(public httpServices: HttpServicesProvider, public loadingCtrl: LoadingController) {
    console.log('Hello HomeServicesProvider Provider');
  }

  getCarpoolingList(page) {
    let loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: '加载中...'
    });

    loading.present();
    return this.httpServices.post('/getCarpoolingList.php', { page: page }).then(
      (res) => {
        console.log(res);
        loading.dismiss();
        return res
      }
    );
  }

  getSecondhandHouseList(page) {
    return this.httpServices.post('/getSecondhandHouseList.php', { page: page }).then(
      (res) => {
        console.log(res);
        return res
      }
    );
  }


}
