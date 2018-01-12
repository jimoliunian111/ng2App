import { Component, ViewChild, Injectable, Input, OnInit } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { PublicFuncProvider } from '../../providers/public-func/public-func';


@Injectable()
@Component({
  selector: 'banner',
  templateUrl: 'banner.html'
})
export class BannerComponent implements OnInit {
  @ViewChild(Slides) slides: Slides;
  @Input() bannerObj: Object;
  text: string;
  bannersObj: Object;

  constructor(public navCtrl: NavController,
              public func: PublicFuncProvider) {}
  slideChanged () {
    this.slides.startAutoplay()
  }
  ngOnInit () {
    console.log('banner', this.bannerObj)
    this.bannersObj = this.bannerObj
  }
  ItemClick (item) {
    this.func.ItemClick(item)
  }
}
