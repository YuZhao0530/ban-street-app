import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  bannerSlides = [
    {
      imageUrl: 'assets/imgs/logo.png'
    },
    {
      imageUrl: 'assets/imgs/logo.png'
    },
    {
      imageUrl: 'assets/imgs/logo.png'
    }
  ];
  @ViewChild('bannerSlidesEl') bannerSlidesEl:any;

  constructor(public navCtrl: NavController) {

  }

  ionViewDidEnter(){
    this.bannerSlidesEl.autoplayDisableOnInteraction = false;
    this.bannerSlidesEl.startAutoplay();
  }

  ionViewDidLeave(){
    this.bannerSlidesEl.stopAutoplay();
  }

  carpooling() {
    this.navCtrl.push('CarpoolingPage');
  }

}
