import { Component, ViewChild } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  bannerSlides = [
    {
      imageUrl: 'http://112.74.33.126/ban-street/banners/1.png'
    },
    {
      imageUrl: 'http://112.74.33.126/ban-street/banners/2.png'
    },
    {
      imageUrl: 'http://112.74.33.126/ban-street/banners/3.png'
    },
    {
      imageUrl: 'http://112.74.33.126/ban-street/banners/4.png'
    },
    {
      imageUrl: 'http://112.74.33.126/ban-street/banners/5.png'
    }
  ];
  @ViewChild('bannerSlidesEl') bannerSlidesEl:any;

  constructor(
    public navCtrl: NavController, 
    public modalCtrl: ModalController) {
  }

  ionViewDidEnter(){
    this.bannerSlidesEl.autoplayDisableOnInteraction = false;
    this.bannerSlidesEl.startAutoplay();
  }

  ionViewDidLeave(){
    this.bannerSlidesEl.stopAutoplay();
  }

  openHomeSearch() {
    let homeSearchModal = this.modalCtrl.create('HomeSearch');
    homeSearchModal.present();
  }

  findGoods(page) {
    this.navCtrl.push(page);
  }

}
