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
  @Output() cityAddress: string = '广州'
  //cityAddress: string = '广州';
  cityList: any;
  text: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public ApiProvider: ApiProvider) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CityPopupPage');
    this.getData()
  }
  close() {
    this.viewCtrl.dismiss();
  }
  getData() {
    this.ApiProvider.GetCommonDate({}).subscribe((resp) => {
      console.log('城市数据', resp)
      this.cityList = resp.region_list
      console.log('6666', this.cityList)
    }, (err) => {});
  }
  cityChoose(item) {
    this.cityAddress = item.region_name
    this.close()
  }

}