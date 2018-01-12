import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
//import { ProductPage } from '../../pages/product/product';

@Component({
  selector: 'jn-product',
  templateUrl: 'jn-product.html'
})
export class JnProductComponent {
  @Input() item: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public api: ApiProvider) {}
  goProduct (item) {
    this.navCtrl.push('ProductPage', {id: item.goods_id})
  }
  showNum (item, $event) {
    console.log(item, '555')
    let params = {
      itemId: item.item_id ? item.item_id : item.goods_id,
      quantity: 1
    }
    this.api.GetAddCart(params).subscribe((res) => {
      console.log('sssss====', res)
    }, (err) => {

    })
  }
}
