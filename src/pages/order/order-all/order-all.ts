import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { ApiProvider } from '../../../providers/api/api';
@IonicPage()
@Component({
  selector: 'page-order-all',
  templateUrl: 'order-all.html',
})
export class OrderAllPage {
  params: Object = {
    page: 1,
    per_page: 200
  }
  orderObj: Object;
  orderTabArr: any = [
    {
      name: '全部',
      idx: 0
    },{
      name: '待付款',
      idx: 1,
      value: '0'
    },{
      name: '待发货',
      idx: 2,
      value: '1'
    },{
      name: '配送中',
      idx: 3,
      value: '3'
    }
  ]
  tabIdx: any = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public api: ApiProvider) {
  }
  ionViewWillEnter () {
    this.init()
  }
  ionViewDidLoad() {

  }
  init () {
    this.tabIdx = this.navParams.data.idx
    if (this.navParams.data.id) {
      this.tabIdx = this.navParams.data.idx
      let obj = {
        ...this.params,
        status: +this.navParams.data.id
      }
      this.getData(obj)
    } else {
      this.getData(this.params)
    }
  }
  getData (params) {
    this.api.GetOrderListData(params).subscribe(resp => {
      if (resp.error_code === 0) {
        console.log('订单列表数据成功', resp)
        this.orderObj = resp
      }
    })
  }
  orderTap (item, index) {
    console.log(index)
    this.tabIdx = index
    if (item.value) {
      let obj = {
        ...this.params,
        status: +item.value
      }
      this.getData(obj)
    } else {
      this.getData(this.params)
    }
  }
}
