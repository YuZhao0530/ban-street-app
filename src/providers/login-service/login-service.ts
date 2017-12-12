import { Injectable } from '@angular/core';

import { HttpServicesProvider } from '../http-services/http-services';

/*
  Generated class for the LoginServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginServiceProvider {

  constructor(public httpServices: HttpServicesProvider) {
    console.log('Hello LoginServiceProvider Provider');
  }

  getSmscode(mobile) {
    return this.httpServices.post('/sendMobileCode.php', { mobile: mobile }).then(
      (res) => {
        console.log(res);
        return res
      }
    );
  }

  register(item) {
    return this.httpServices.post('/register.php', item).then(
      (res) => {
        console.log(res);
        return res
      }
    );
  }

  login(item) {
    return this.httpServices.post('/login.php', item).then(
      (res) => {
        console.log(res);
        return res
      }
    );
  }

  resetPwd(item) {
    return this.httpServices.post('/resetPwd.php', item).then(
      (res) => {
        console.log(res);
        return res
      }
    );
  }

}
