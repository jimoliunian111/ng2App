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
  choseCity(myEvent) {
    let modal = this.modalCtrl.create('CityListComponentModule');
    modal.present({
//    ev: myEvent
    });
  }
}
