import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides, ViewController, IonicPage } from 'ionic-angular';
import { ApiProvider } from '../../../providers/api/api';
//import { SearchReasultPage } from '../search-reasult/search-reasult';

/**
 * Generated class for the ProductPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {
	@ViewChild(Slides) slides: Slides;
  ProductParam: Object = {
  	product: this.navParams.data.id
  }
  currentNum: Number = 1
  is_like: Boolean = false
  productObj: Object
  productSides: any
  tags: any
  tabShow: Number = 0
  tabs: any = [
    {name: '商品详情', idx: 0}, {name: '售后服务', idx: 1}
  ]
  constructor(public navCtrl: NavController,
  	          public navParams: NavParams,
  	          public ApiProvider: ApiProvider,
              public viewCtrl: ViewController) {
  }

  slideChanged () {
  	this.slides.startAutoplay()
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
    this.getProduct()
  }
  ionViewWillEnter() {

  }

  getProduct () {
  	this.ApiProvider.ProductDate(this.ProductParam).subscribe((resp) => {
    	console.log('详情数据', resp)
    	this.productObj = resp.product
    	this.productSides = resp.product.photos
    	this.tags = resp.product.tags
    	console.log(7777777777, this.productObj)
    }, (err) => {

    });
  }
  favoriteBtn () {
  	this.is_like = !this.is_like
  }
  goReasult (id, name) {
    this.navCtrl.push('SearchReasultPage', {supplier_id: id, name: name})
  }
  tabClick (item) {
    this.tabShow = item.idx
  }
}
