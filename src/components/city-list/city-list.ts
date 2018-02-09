import { Component, Output } from '@angular/core';
import { NavController, NavParams, ViewController, IonicPage } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the CityListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@IonicPage()
@Component({
  selector: 'city-list',
  templateUrl: 'city-list.html'
})
export class CityListComponent {
  cityAddress: string = '广州'
  cityList: any;
  text: string;
  callback: any


  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public ApiProvider: ApiProvider) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CityPopupPage');
    this.init()
    this.getData()
  }
  init () {
    this.callback = this.navParams.data.callBack
    this.text = this.navParams.data.data
  }
  close() {
    this.navCtrl.pop()
  }
  getData() {
    this.ApiProvider.GetCommonDate({}).subscribe((resp) => {
      console.log('城市数据', resp)
      this.cityList = resp.region_list
      console.log('6666', this.cityList)
    }, (err) => {});
  }
// cityChoose(item, event) {
//  console.log('event', event)
//  this.cityAddress = item.region_name
//  this.callback(item)
//  this.close()
// }
  cityChoose (item) {
    this.callback(item).then((result) => {
      console.log('回传成功', result)
      this.navCtrl.pop()
    }, err => {
      console.log('回传失败', err)
    })
  }

}