import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DateTime } from 'ionic-angular/components/datetime/datetime';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  myDate: any;
  @ViewChild('aboutDatetime') aboutDatetime: DateTime;
  constructor(public navCtrl: NavController) {

  }
  showDate() {
    console.log(this.myDate);
    console.log(this.myDate.substring(11,16));
    console.log(this.myDate.substring(0,10).concat(" " + this.myDate.substring(11,16)));
  }

  setDefault() {
  }
  
  openDatetime(ev) {
    let date = new Date();
    this.myDate = new Date(date.getTime() - 
                 date.getTimezoneOffset()*60000).toISOString();
    // console.log(this.myDate.substring(11,16));
    // console.log(this.myDate.substring(0,10));
    console.log(this.myDate);
    this.aboutDatetime._click(ev);
  }

  publish(page){
    this.navCtrl.push('Publish' + page);
  }
}
