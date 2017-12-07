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

  publishSecondhandHouse(item) {
    return this.httpServices.post('/publishSecondhandHouse.php', { item: item }).then(
      (res) => {
        console.log(res);
        return res
      }
    );
  }

}
