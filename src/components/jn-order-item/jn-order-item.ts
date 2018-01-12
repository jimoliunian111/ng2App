import { Component, Input, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the JnOrderItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'jn-order-item',
  templateUrl: 'jn-order-item.html'
})
export class JnOrderItemComponent {
  @Input() item: any;
  text: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    console.log('Hello JnOrderItemComponent Component');
    this.text = 'Hello World';
  }
  ngOnInit () {
    console.log('121', this.item)
  }
  goView (path, params?) {
    this.navCtrl.push(path, params)
  }
}
