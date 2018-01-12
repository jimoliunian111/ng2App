import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { ApiProvider } from '../../../providers/api/api';

/**
 * Generated class for the FavoritePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html',
})
export class FavoritePage {
  params: Object = {
    page: 1,
    per_page: 200
  }
  favoriteList: any

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public api: ApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritePage');
    this.init()
  }
  init () {
    this.getData(this.params)
  }
  getData (params) {
    this.api.GetFavoriteData(params).subscribe((resp) => {
      if (resp.error_code === 0) {
        console.log('收藏列表数据', resp)
        this.favoriteList = resp.products
      }
    })
  }
}
