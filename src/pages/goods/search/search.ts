import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { ApiProvider } from '../../../providers/api/api';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  hotShow: Boolean = true;
  hotKw: any;
  historyKw: any;
  searchList: any;
  params: Object = {
    page: 1,   // 请求页码
    per_page: 200, // 每页分类数
    sort_key: 0,
    sort_value: 1
  }
  keyword: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public ApiProvider: ApiProvider,) {
  }

  ionViewDidLoad() {
    this.getData()
  }
  goBack () {
    this.navCtrl.pop()
  }
  getData () {
    this.ApiProvider.GetHotSearchData({}).subscribe((resp) => {
      this.hotKw = resp.keywords
    }, (err) => {});

  }
  search () {
    let obj = {
      keyword: this.keyword
    }
    Object.assign(this.params, obj)
    this.ApiProvider.GetSearchData(this.params).subscribe((resp) => {
      console.log('搜索结果数据', resp)
      this.hotShow = false
      this.searchList = resp.products
    }, (err) => {

    });
  }
  searchBtn () {
    this.search()
  }
  searchFromHot (keyword) {
    this.keyword = keyword
    this.search()
  }
  doRefresh(refresher) {
    setTimeout(() => {
      this.search()
      refresher.complete();
    }, 1000)
  }
}
