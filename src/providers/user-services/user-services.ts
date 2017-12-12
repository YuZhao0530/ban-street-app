import { Injectable } from '@angular/core';

import { HttpServicesProvider } from '../http-services/http-services';
/*
  Generated class for the UserServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserServicesProvider {

  constructor(
    public httpServices: HttpServicesProvider,
  ) {
    console.log('Hello UserServicesProvider Provider');
  }

  publishList(id) {
    return this.httpServices.post('/publishList.php', { userId: id }).then(
      (res) => {
        console.log(res);
        return res
      }
    );
  }

  updateAccountInfo(user) {
    return this.httpServices.post('/updateAccountInfo.php', user).then(
      (res) => {
        console.log(res);
        return res
      }
    );
  }

  submitAdvice(item) {
    return this.httpServices.post('/submitAdvice.php', item).then(
      (res) => {
        console.log(res);
        return res
      }
    );
  }

}
