import { Injectable } from '@angular/core';

import { HttpServicesProvider } from '../http-services/http-services';

/*
  Generated class for the PublishServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PublishServicesProvider {

  constructor(
    public httpServices: HttpServicesProvider,
  ) {
    console.log('Hello PublishServicesProvider Provider');
  }

  publishHousekeeping(item, dataType) {
    return this.httpServices.post('/publish-' + dataType + '.php', { item: item }).then(
      (res) => {
        console.log(res);
        return res
      }
    );
  }

  publishSecondhandCar(item) {
    return this.httpServices.post('/publishSecondhandCar.php', { item: item }).then(
      (res) => {
        console.log(res);
        return res
      }
    );
  }

  publishSecondhandHouse(item) {
    return this.httpServices.post('/publishSecondhandHouse.php', { item: item }).then(
      (res) => {
        console.log(res);
        return res
      }
    );
  }

  publishSecondhandGoods(item) {
    return this.httpServices.post('/publishSecondhandGoods.php', { item: item }).then(
      (res) => {
        console.log(res);
        return res
      }
    );
  }

  publishMallGoods(item) {
    return this.httpServices.post('/publishMallGoods.php', { item: item }).then(
      (res) => {
        console.log(res);
        return res
      }
    );
  }

  publishInternetWork(item) {
    return this.httpServices.post('/publishInternetWork.php', { item: item }).then(
      (res) => {
        console.log(res);
        return res
      }
    );
  }

  publishConvenienceInfo(item) {
    return this.httpServices.post('/publishConvenienceInfo.php', { item: item }).then(
      (res) => {
        console.log(res);
        return res
      }
    );
  }

  publishCarpooling(item) {
    return this.httpServices.post('/publishCarpooling.php', { item: item }).then(
      (res) => {
        console.log(res);
        return res
      }
    );
  }

}
