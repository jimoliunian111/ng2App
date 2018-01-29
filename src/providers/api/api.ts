import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Api } from '../api';
import { ModuleApiProvider } from '../module-api/module-api';
import { AlertController, LoadingController  } from 'ionic-angular';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiProvider {
  commomOption: Object = {
  	always_send_city: 104104101,
  	city_code: 104104101,
  	g_version: '2.8.3',
  	g_uuid: 'browse',
  	g_devicetype: 'browse'
  }
  ApiUrl: Object = {
    login: '/v2/ecapi.auth.signin',
    register: '/v2/ecapi.auth.default.signup',
    category: '/v2/ecapi.category.list',
    special: '/v2/ecapi.product.special',
    product: '/v2/ecapi.product.get',
    search: '/v2/ecapi.product.list',
    activity: '/v2/ecapi.activity.get',
    common: '/v2/ecapi.configure.list',
    searchHot: '/v2/ecapi.search.keyword.list',
    favorite: '/v2/ecapi.product.liked.list',
    profile: '/v2/ecapi.user.profile.get',
    period: '/v2/ecapi.product.period',
    orderList: '/v2/ecapi.order.list',
    addCart: '/v2/ecapi.cart.add'
  }
  ModuleApi: Object = {
    homeConf: '/api/v2/app/home.template',
    homeConfData: '/api/v2/app/home.data',
    tempConf: '/api/v2/app/get.template',
    tempConfData: '/api/v2/app/get.data'
  }
  constructor(public http: HttpClient,
              public api: Api,
              public alertCtrl: AlertController,
              public mApi: ModuleApiProvider,
              public loadingCtrl: LoadingController
              ) {
  }

  init (url, accountInfo: any, type?: Boolean) {
    let seq = (type ? this.mApi : this.api).post(url, {...this.commomOption, ...accountInfo}).map(res => res.json() || {});
    seq
      .subscribe(res => {
        console.log('+++++', res)
        if (res.error_code === 0 || res.code === 200) {
          return res
        } else {
          this.showAlert('提示', res.error_desc || res.msg)
          return
        }
      }, err => {
        return err
      });
    return seq;
  }
  showLoading () {
    let loader = this.loadingCtrl.create({
      dismissOnPageChange: true
    });
    loader.present();
    setTimeout(() => {
      this.hideLoading(loader);
    }, 7000)
  }
  hideLoading (loader) {
    loader.dismiss();
  }
  showAlert(title, content) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: content,
      buttons: ['确定']
    });
    alert.present();
  }
  // 登录
  SignIn(accountInfo: any) {
    return this.init('/v2/ecapi.auth.signin', accountInfo)
  }
  // 首页数据 http://xxx.api.freshjn.com/v2/ecapi.product.period
  HomeProduct(accountInfo: any) {
    return this.init('/v2/ecapi.product.period', accountInfo)
  }
  // 注册
  SignUn(accountInfo: any) {
    return this.init('/v2/ecapi.auth.default.signup', accountInfo)
  }

  // 首页模板配置  '/api/v2/app/home.template'
  GetHomeTemp(accountInfo: any) {
    return this.init('/api/v2/app/home.template', accountInfo, true)
  }

  // 首页配置请求数据 '/api/v2/app/home.data'
  GetHomeData(accountInfo: any) {
    return this.init('/api/v2/app/home.data', accountInfo, true)
  }

  // 分类数据 http://xxx.api.freshjn.com/v2/ecapi.category.list
  categoryDate(accountInfo: any) {
    return this.init('/v2/ecapi.category.list', accountInfo)
  }

  // 专题数据 http://xxx.api.freshjn.com/v2/ecapi.product.special
  SubjectDate(accountInfo: any) {
    return this.init('/v2/ecapi.product.special', accountInfo)
  }

  // 商品详情数据 http://xxx.api.freshjn.com/v2/ecapi.product.get
  ProductDate(accountInfo: any) {
    return this.init('/v2/ecapi.product.get', accountInfo)
  }

  // 搜索  http://xxx.api.freshjn.com/v2/ecapi.product.list
  GetSearchData(accountInfo: any) {
    return this.init('/v2/ecapi.product.list', accountInfo)
  }

  // 模板配置 /api/v2/app/get.template
  GetModuleTemp(accountInfo: any) {
    return this.init('/api/v2/app/get.template', accountInfo, true)
  }

  // 模板数据 /api/v2/app/get.data
  GetModuleData(accountInfo: any) {
    return this.init('/api/v2/app/get.data', accountInfo, true)
  }

  // 活动接口 http://xxx.api.freshjn.com/v2/ecapi.activity.get
  GetActivityDate(accountInfo: any) {
    return this.init('/v2/ecapi.activity.get', accountInfo)
  }

  // 通用接口（城市数据)  http://xxx.api.freshjn.com/v2/ecapi.configure.list
  GetCommonDate(accountInfo: any) {
    return this.init('/v2/ecapi.configure.list', accountInfo)
  }

  // 热门搜索  http://xxx.api.freshjn.com/v2/ecapi.search.keyword.list
  GetHotSearchData(accountInfo: any) {
    return this.init('/v2/ecapi.search.keyword.list', accountInfo)
  }

  // 收藏    /v2/ecapi.product.liked.list
   GetFavoriteData(accountInfo: any) {
    return this.init('/v2/ecapi.product.liked.list', accountInfo)
   }

   // 个人中心
   GetUserData(accountInfo: any) {
    return this.init('/v2/ecapi.user.profile.get', accountInfo)
   }

   // 订单列表 /v2/ecapi.order.list
   GetOrderListData(accountInfo: any) {
    return this.init('/v2/ecapi.order.list', accountInfo)
   }

   // 加入购物车 /v2/ecapi.cart.add
   GetAddCart (accountInfo: any) {
     return this.init('/v2/ecapi.cart.add', accountInfo)
   }
   // 购物车数据 /v2/ecapi.cart.get
   GetAddInfo (accountInfo: any) {
     return this.init('/v2/ecapi.cart.get', accountInfo)
   }
}

