import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../../providers/api/api';

//import { BrandPage } from '../../pages/brand/brand';
//import { SubjectPage } from '../../pages/subject/subject';
//import { ActivityPage } from '../../pages/activity/activity';
//import { ProductPage } from '../../pages/product/product';
//import { CustomPage } from '../../pages/custom/custom';

/**
 * Generated class for the ActivityPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-activity',
  templateUrl: 'activity.html',
})
export class ActivityPage {
  activityObj: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public ApiProvider: ApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActivityPage');
    this.getData()
  }
  back () {
    this.navCtrl.pop()
  }
  getData () {
    let param: any = {
      activity: this.navParams.data.id
    }
    this.ApiProvider.GetActivityDate(param).subscribe((resp) => {
        console.log('活动数据', resp)
        this.activityObj = resp
      }, (err) => {});
  }
  activityClick (item) {
    console.log('点击对象', item)
    //    if (item.url && item.url.length > 0) {
    //      if (item.url.indexOf(this.host) > -1) {
    //        let showcaseUrl = item.url.replace(this.host + '/#', '')
    //        this.$router.push({path: showcaseUrl})
    //      }
    //      return
    //    }

    if(item.item_type === 'template') {
      this.goDiycustom(+item.item_id)
    } else if(item.item_type === 'special') {
      this.goSubject(+item.item_id)
    } else if(item.item_type === 'goods') {
      this.goProduct(+item.item_id)
    } else if(item.item_type === 'brand') {
      this.goBrand(+item.item_id)
    }
  }
  goBrand(item) {
    this.navCtrl.push('BrandPage', {
      id: item
    })
  }
  goSubject(item) {
    this.navCtrl.push('SubjectPage', {
      id: item
    })
  }
  goProduct(item) {
    this.navCtrl.push('ProductPage', {
      id: item
    })
  }
  goDiycustom(item) {
    this.navCtrl.push('CustomPage', {
      id: item
    })
  }
}
