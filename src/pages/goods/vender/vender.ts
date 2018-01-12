import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { ApiProvider } from '../../../providers/api/api';
//import { SubjectPage } from '../subject/subject'

/**
 * Generated class for the BrandListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-vender',
  templateUrl: 'vender.html',
})
export class VenderPage {
  brandListParam: Object = {
  	locations: 'icon'
  }
  homeArr: any
  constructor(public navCtrl: NavController,
  	          public navParams: NavParams,
              public ApiProvider: ApiProvider) {
  }

  ionViewDidLoad() {
    this.getHomeProduct()
  }
  doRefresh(refresher) {
  	console.log('下拉刷新方法调用', refresher)
  	setTimeout(() => {
  		console.log('延迟两秒关闭下拉刷新方法')
  		refresher.complete();
  	}, 2000)
  }
  doInfinite(infiniteScroll) {
  	console.log('上拉加载方法调用', infiniteScroll)

  	setTimeout(() => {
  		console.log('延迟两秒关闭上拉加载方法')
  		infiniteScroll.complete();
  	}, 2000)
  }
  getHomeProduct () {
  	this.ApiProvider.HomeProduct(this.brandListParam).subscribe((resp) => {
    	console.log('首页数据', resp)
    	this.homeArr = resp.data
    }, (err) => {

    });
  }
  goSubject (id) {
    this.navCtrl.push('SubjectPage', {id: id})
  }
}
