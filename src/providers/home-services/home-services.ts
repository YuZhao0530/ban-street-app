import { Injectable } from '@angular/core';

import { HttpServicesProvider } from '../http-services/http-services';

/*
  Generated class for the HomeServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HomeServicesProvider {

  constructor(public httpServices: HttpServicesProvider) {
    console.log('Hello HomeServicesProvider Provider');
  }

  homeSearch(keyword) {
    return this.httpServices.post('/homeSearch.php', { keyword: keyword }).then(
      (res) => {
        console.log(res);
        return res
      }
    );
  }

  getCarpoolingList(page) {
    return this.httpServices.post('/getCarpoolingList.php', { page: page }).then(
      (res) => {
        console.log(res);
        return res
      }
    );
  }

  getSecondhandCarList(page) {
    return this.httpServices.post('/getSecondhandCarList.php', { page: page }).then(
      (res) => {
        console.log(res);
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

  getSecondhandGoodsList(page) {
    return this.httpServices.post('/getSecondhandGoodsList.php', { page: page }).then(
      (res) => {
        console.log(res);
        return res
      }
    );
  }

  getMallGoodsList(page) {
    return this.httpServices.post('/getMallGoodsList.php', { page: page }).then(
      (res) => {
        console.log(res);
        return res
      }
    );
  }

  getInternetWorkList(page) {
    return this.httpServices.post('/getInternetWorkList.php', { page: page }).then(
      (res) => {
        console.log(res);
        return res
      }
    );
  }

  getConvenienceInfoList(page) {
    return this.httpServices.post('/getConvenienceInfoList.php', { page: page }).then(
      (res) => {
        console.log(res);
        return res
      }
    );
  }

  getTourismList(page) {
    return this.httpServices.post('/getTourismList.php', { page: page }).then(
      (res) => {
        console.log(res);
        return res
      }
    );
  }

  getHousekeepingList(page,dataType) {
    return this.httpServices.post('/get'+dataType+'List.php', { page: page }).then(
      (res) => {
        console.log(res);
        return res
      }
    );
  }


}
