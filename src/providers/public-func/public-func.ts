import { Injectable } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
//import { BrandPage } from '../../pages/brand/brand';
//import { SubjectPage } from '../../pages/subject/subject';
//import { ActivityPage } from '../../pages/activity/activity';
//import { ProductPage } from '../../pages/product/product';
//import { CustomPage } from '../../pages/custom/custom';
/*
  Generated class for the PublicFuncProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class PublicFuncProvider {
  private navCtrl: NavController
  host: string = 'http://m.freshjn.com';
  constructor(public http: Http, private app: App) {
    console.log('Hello PublicFuncProvider Provider');
    this.navCtrl = this.app.getActiveNav();
  }

  ItemClick(item) {
    if(item.type === 'template') {
      this.goDiycustom(+item.id)
    } else if(item.type === 'special') {
      this.goSubject(+item.id)
    } else if(item.type === 'goods') {
      this.goProduct(+item.id)
    } else if(item.type === 'brand') {
      this.goBrand(+item.id)
    } else if(item.type === 'activity') {
      this.goActivity(+item.id)
    }
  }
  swipeSmClick(item) {
    console.log('2323', item)
      if (!item.item_type) {
        this.goProduct(+item.goods_id)
      } else if (item.item_type) {
      if (item.item_type === 'special') {
        this.goSubject(+item.id)
      } else if (item.item_type === 'goods') {
        this.goProduct(+item.id)
      } else if (item.item_type === 'brand') {
        this.goBrand(+item.id)
      } else if (item.item_type === 'activity') {
        this.goActivity(+item.id)
      }
    }
  }
  swipeMdClick(item, type) {
    if (type === 'brand') {
      this.goBrand(+item.id)
    } else if (type === 'special') {
      this.goSubject(+item.id)
    } else if (type === 'activity') {
      this.goActivity(+item.id)
    } else if (type === 'goods') {
      this.goProduct(+item.id)
    }
  }
  goActivity(item) {
    return this.navCtrl.push('ActivityPage', {
      id: item
    })
  }
  goBrand(item) {
    return this.navCtrl.push('BrandPage', {
      id: item
    })
  }
  goSubject(item) {
    return this.navCtrl.push('SubjectPage', {
      id: item
    })
  }
  goProduct(item) {
    return this.navCtrl.push('ProductPage', {
      id: item
    })
  }
  goDiycustom(item) {
    return this.navCtrl.push('CustomPage', {
      id: item
    })
  }
}