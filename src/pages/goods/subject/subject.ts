import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { ApiProvider } from '../../../providers/api/api';
//import { ProductPage } from '../product/product'
//import { JnGoodslistComponent } from '../../components/jn-goodslist/jn-goodslist'

/**
 * Generated class for the SubjectPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-subject',
  templateUrl: 'subject.html',
})
export class SubjectPage {
  subjectParam: Object = {
  	special: this.navParams.data.id,
  	page: 1,
  	per_page: 100
  }

  subjectTitle: any
  subjectImg: any
  subjectList: any
  constructor(public navCtrl: NavController,
  	          public navParams: NavParams,
              public ApiProvider: ApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubjectPage');
    console.log('专题参数', this.navParams.data.id)
    this.getSubject()
  }
  getSubject () {
  	this.ApiProvider.SubjectDate(this.subjectParam).subscribe((resp) => {
    	console.log('专题数据', resp)
    	this.subjectTitle = resp.special_name
    	this.subjectImg = resp.special_logo
    	this.subjectList = resp.special_goods
    }, (err) => {

    });
  }
  goProduct(product) {
  	this.navCtrl.push('ProductPage', {id: product.goods_id})
  }
}
