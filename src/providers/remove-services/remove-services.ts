import { Injectable } from '@angular/core';

import { HttpServicesProvider } from '../http-services/http-services';

/*
  Generated class for the RemoveServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RemoveServicesProvider {

  constructor(public httpServices: HttpServicesProvider) {
    console.log('Hello RemoveServicesProvider Provider');
  }

  removeSecondhandCar(item) {
    return this.httpServices.post('/removeSecondhandCar.php', item).then(
      (res) => {
        console.log(res);
        return res
      }
    );
  }

  removeSecondhandHouse(item) {
    return this.httpServices.post('/removeSecondhandHouse.php', item).then(
      (res) => {
        console.log(JSON.stringify(res));
        return res
      }
    );
  }

  removeSecondhandGoods(item) {
    return this.httpServices.post('/removeSecondhandGoods.php', item).then(
      (res) => {
        console.log(res);
        return res
      }
    );
  }

  removeMallGoods(item) {
    return this.httpServices.post('/removeMallGoods.php', item).then(
      (res) => {
        console.log(res);
        return res
      }
    );
  }

  removeInternetWork(item) {
    return this.httpServices.post('/removeInternetWork.php', item).then(
      (res) => {
        console.log(res);
        return res
      }
    );
  }

  removeConvenienceInfo(item) {
    return this.httpServices.post('/removeConvenienceInfo.php', item).then(
      (res) => {
        console.log(res);
        return res
      }
    );
  }

  removeCarpooling(item) {
    return this.httpServices.post('/removeCarpooling.php', item).then(
      (res) => {
        console.log(res);
        return res
      }
    );
  }

  removeHousekeeping(item) {
    return this.httpServices.post('/remove' + item.dataType + '.php', { id: item.id }).then(
      (res) => {
        console.log(res);
        return res
      }
    );
  }

}
