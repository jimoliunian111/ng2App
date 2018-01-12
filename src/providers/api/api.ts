import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
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
  constructor(public http: Http, public api: Api,
              public alertCtrl: AlertController,
              public mApi: ModuleApiProvider,
              public loadingCtrl: LoadingController) {
  }
  ApiUrl: Object = {
    login: '/v2/ecapi.auth.signin', //登录
    register: '/v2/ecapi.auth.default.signup', //注册
    category: '/v2/ecapi.category.list', //分类
    special: '/v2/ecapi.product.special', //专题
    product: '/v2/ecapi.product.get', // 商品详情
    search: '/v2/ecapi.product.list', //搜索
    activity: '/v2/ecapi.activity.get', //活动
    common: '/v2/ecapi.configure.list', // 通用(城市列表)
    searchHot: '/v2/ecapi.search.keyword.list', //获取搜索热门关键字
    favorite: '/v2/ecapi.product.liked.list', // 收藏
    profile: '/v2/ecapi.user.profile.get', //个人中心
    period: '/v2/ecapi.product.period',
    orderList: '/v2/ecapi.order.list',
    addCart: '/v2/ecapi.cart.add'
  }
  ModuleApi: Object = {
    homeConf: '/api/v2/app/home.template', //首页配置
    homeConfData: '/api/v2/app/home.data', //首页配置数据
    tempConf: '/api/v2/app/get.template', //模块模板配置
    tempConfData: '/api/v2/app/get.data' //模块模板配置数据
  }
  init (url, accountInfo: any, type?: Boolean) {
    let seq = (type ? this.mApi : this.api).post(url, {...this.commomOption, ...accountInfo}).map(res => res.json() || {});
    seq
      .subscribe(res => {
        console.log('ssss', res)
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
    return this.init(this.ApiUrl.login, accountInfo)
  }
  // 首页数据 http://xxx.api.freshjn.com/v2/ecapi.product.period
  HomeProduct(accountInfo: any) {
    return this.init(this.ApiUrl.period, accountInfo)
  }
  // 注册
  SignUn(accountInfo: any) {
    return this.init(this.ApiUrl.register, accountInfo)
  }

  // 首页模板配置  /api/app/home.template
  GetHomeTemp(accountInfo: any) {
    return this.init(this.ModuleApi.homeConf, accountInfo, true)
  }

  // 首页配置请求数据  /api/app/home.data
  GetHomeData(accountInfo: any) {
    return this.init(this.ModuleApi.homeConfData, accountInfo, true)
  }

  // 分类数据 http://xxx.api.freshjn.com/v2/ecapi.category.list
  categoryDate(accountInfo: any) {
    return this.init(this.ApiUrl.category, accountInfo)
  }

  // 专题数据 http://xxx.api.freshjn.com/v2/ecapi.product.special
  SubjectDate(accountInfo: any) {
    return this.init(this.ApiUrl.special, accountInfo)
  }

  // 商品详情数据 http://xxx.api.freshjn.com/v2/ecapi.product.get
  ProductDate(accountInfo: any) {
    return this.init(this.ApiUrl.product, accountInfo)
  }

  // 搜索  http://xxx.api.freshjn.com/v2/ecapi.product.list
  GetSearchData(accountInfo: any) {
    return this.init(this.ApiUrl.search, accountInfo)
  }

  // 模板配置 /api/v2/app/get.template
  GetModuleTemp(accountInfo: any) {
    return this.init(this.ModuleApi.tempConf, accountInfo, true)
  }

  // 模板数据 /api/v2/app/get.data
  GetModuleData(accountInfo: any) {
    return this.init(this.ModuleApi.tempConfData, accountInfo, true)
  }

  // 活动接口 http://xxx.api.freshjn.com/v2/ecapi.activity.get
  GetActivityDate(accountInfo: any) {
    return this.init(this.ApiUrl.activity, accountInfo)
  }

  // 通用接口（城市数据)  http://xxx.api.freshjn.com/v2/ecapi.configure.list
  GetCommonDate(accountInfo: any) {
    return this.init(this.ApiUrl.common, accountInfo)
  }

  // 热门搜索  http://xxx.api.freshjn.com/v2/ecapi.search.keyword.list
  GetHotSearchData(accountInfo: any) {
    return this.init(this.ApiUrl.searchHot, accountInfo)
  }

  // 收藏    /v2/ecapi.product.liked.list
   GetFavoriteData(accountInfo: any) {
    return this.init(this.ApiUrl.favorite, accountInfo)
   }

   GetUserData(accountInfo: any) {
    return this.init(this.ApiUrl.profile, accountInfo)
   }

   // 订单列表 /v2/ecapi.order.list
   GetOrderListData(accountInfo: any) {
    return this.init(this.ApiUrl.orderList, accountInfo)
   }

   // 加入购物车 /v2/ecapi.cart.add
   GetAddCart (accountInfo: any) {
     return this.init(this.ApiUrl.addCart, accountInfo)
   }
}

