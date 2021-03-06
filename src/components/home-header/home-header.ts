import { Component, Input, OnInit } from '@angular/core';
import { NavController, Slides, ModalController, ViewController, AlertController, IonicPage } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@IonicPage()
@Component({
  selector: 'home-header',
  templateUrl: 'home-header.html'
})
export class HomeHeaderComponent {
  @Input() cityAddress: any;
  text: string;
  address: any = {
    region_name: '广州',
    area_code: '020',
    region_id: '104104101'
  }
  barcode: any = new BarcodeScanner()

  constructor(public ApiProvider: ApiProvider,
              public alertCtrl: AlertController,
              public modalCtrl: ModalController,
              public navCtrl: NavController) {

  }
  alert (obj) {
    let alert = this.alertCtrl.create({
      title: obj.title || '提示',
      subTitle: obj.content,
      buttons: ['知道了']
    });
    alert.present();
  }
  scanQR() {
    this.barcode.scan().then((barcodeData) => {
      console.log('成功调用扫描二维码')
      let obj = {
        content: '二维码信息' + barcodeData.text
      }
      this.alert(obj)
    }, (err) => {
      console.log('失败调用扫描二维码', err)
      let obj = {
        content: '扫描失败'
      }
      this.alert(obj)
    });
  }
  goSearch () {
    this.navCtrl.push('SearchPage', {kw: ''})
  }
  choseCity() {
    this.navCtrl.push('CityListComponent', {
      data: '测试传至',
      callBack: this.popParams
    })
  }
// popParams (data)  {
//  console.log(this.cityAddress)
//  this.address = data
// }
  popParams = (params) => {
    return new Promise((resolve, reject) => {
      if (typeof(params) !== 'undefined') {
        this.address = params
        resolve('ok')
      } else {
        reject(Error('error'))
      }
    })
  }
}
