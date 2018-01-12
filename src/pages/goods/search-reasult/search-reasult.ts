import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { ApiProvider } from '../../../providers/api/api';

/**
 * Generated class for the SearchReasultPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-search-reasult',
  templateUrl: 'search-reasult.html',
})
export class SearchReasultPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public ApiProvider: ApiProvider) {
  }
  params: Object = {
    page: 1,   // 请求页码
    per_page: 200, // 每页分类数
    sort_key: 0,
    sort_value: 1
  }
  title: String = this.navParams.data.name
  resultList: any
  ionViewDidLoad() {
    console.log(this.navParams);
    this.getDate()
  }
  getDate () {
    if (this.navParams.data.id) {
      let obj: Object = {
        category: this.navParams.data.id
      }
      Object.assign(this.params, obj)
    }
    if (this.navParams.data.supplier_id) {
      let obj: Object = {
        suppliers_id: this.navParams.data.supplier_id
      }
      Object.assign(this.params, obj)
    }
    this.ApiProvider.GetSearchData(this.params).subscribe((resp) => {
      console.log('搜索结果数据', resp)
      this.resultList = resp.products
    }, (err) => {

    });
  }
}
