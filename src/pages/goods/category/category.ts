import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, Events } from 'ionic-angular';
import { ApiProvider } from '../../../providers/api/api';
//import { SearchReasultPage } from '../search-reasult/search-reasult';

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html'
})
export class CategoryPage {
  classActived: Number = 0;
  categoryParam: Object = {
  	page: 1,
  	per_page: 100
  }
  cateMain: any
  selectedSide: any
  subCate: any

  constructor(public navCtrl: NavController,
  	          public navParams: NavParams,
              public ApiProvider: ApiProvider,
              public events: Events) {
                this.getCategory()
              }

  ionViewDidLoad() {
//	this.getCategory()
  }

  sideClick(side ,index) {
    console.log('下表', index, side)
    this.subCate = side.last_cats
	  this.classActived = index
  }
  getCategory() {
  	this.ApiProvider.categoryDate(this.categoryParam).subscribe((resp) => {
    	console.log('分类数据', resp)
    	this.cateMain = resp.categories
    	this.subCate = resp.categories[0].last_cats
//    this.selectedSide = resp.categories[0]
//    this.subCate = resp.categories[0].last_cats
    }, (err) => {

    });
  }
  goReasult (item) {
    this.navCtrl.push('SearchReasultPage', {id: item.cat_id, name: item.cat_name})
  }
}
