import { Component, ViewChild, OnInit } from '@angular/core';
import { NavController, Slides, PopoverController, ViewController, AlertController, IonicPage } from 'ionic-angular';
import { ApiProvider } from '../../../providers/api/api';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;
  bannerParam: Object = {
    always_send_city: '104104101',
    locations: "index"
  }
  tempConf: Object = {}
  homeData: Object = {}
  bannerList: any
  homeArr: any
  goodsList: 10
  sale_start: any
  moduleItem: Object
  constructor(public navCtrl: NavController,
    public ApiProvider: ApiProvider,
    public popoverCtrl: PopoverController,
    public viewCtrl: ViewController,
    public alertCtrl: AlertController) {this.getHometemplate()}


  ionViewDidLoad() {

  }
  ngOnInit() {
//  this.getHometemplate()
  }
  doRefresh(refresher) {
    setTimeout(() => {
      this.getHometemplate()
      refresher.complete();
    }, 1000)
  }

  getHometemplate() {
    let HomeParam: Object = {
      enduser_type: 2
    }
    this.ApiProvider.GetHomeTemp(HomeParam).subscribe((resp) => {
      let homeData: Object = {
        template_id: resp.data[0].id
      }
      this.ApiProvider.GetHomeData(homeData).subscribe((res) => {
        this.moduleItem = resp.data[0]
        this.tempConf = JSON.parse(resp.data[0].config)
        this.homeData = res.data
        console.log('首页模板', this.tempConf)
//      console.log('数据', this.homeData)
      }, (err) => {});

    }, (err) => {});
  }

  goProduct(product) {
    this.navCtrl.push('ProductPage', {
      id: product.item_id
    })
  }
  goBrand(brand) {
    this.navCtrl.push('BrandPage', {
      id: brand.item_id
    })
  }
  goSubject(subject) {
    this.navCtrl.push('SubjectPage', {
      id: subject.item_id
    })
  }
}