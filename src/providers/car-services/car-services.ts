import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the CarServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CarServicesProvider {
  appkey = '389ab07a97f9b75d';

  constructor(public http: Http) {
    console.log('Hello CarServicesProvider Provider');
  }

  brands() {
    return this.get('http://api.jisuapi.com/car/brand?appkey='+this.appkey).then(
      (res) => {
        console.log(JSON.stringify(res));
        return res
      }
    );
  }

  types(id) {
    return this.get('http://api.jisuapi.com/car/type?appkey='+this.appkey+'&parentid='+id).then(
      (res) => {
        console.log(JSON.stringify(res));
        return res
      }
    );
  }

  cars(id) {
    return this.get('http://api.jisuapi.com/car/car?appkey='+this.appkey+'&parentid='+id).then(
      (res) => {
        console.log(JSON.stringify(res));
        return res
      }
    );
  }

  public get(url: string) {
    return this.http.get(url)
      .toPromise()
      .then(res => this.handleSuccess(res.json()))
      .catch(error => this.handleError(error.json()));
  }

  public post(url: string, paramObj: any) {
    //x-www-form-urlencoded
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(url, paramObj, new RequestOptions({ headers: headers }))
      .toPromise()
      .then(res => this.handleSuccess(res.json()))
      .catch(error => this.handleError(error.json()));
  }

  private handleSuccess(result) {//请求成功的回调
    // if (result && result.resultCode != "0000") {
    //   let params = {
    //     title: "错误！",
    //     subTitle: result.message,
    //   }
    // }
    return result;
  }

  private handleError(error: Response | any) {//请求失败的回调
    let msg = '请求失败';
    if (error.status == 0) {
      msg = '请求地址错误';
    }
    if (error.status == 400) {
      msg = '请求无效';
      console.log('请检查参数类型是否匹配');
    }
    if (error.status == 404) {
      msg = '请求资源不存在';
      console.error(msg + '，请检查路径是否正确');
    }
    // let params = {
    //   title: "错误！",
    //   subTitle: msg,
    // }
    console.log(JSON.stringify(error));
    return { success: false, msg: msg };
  }

}
