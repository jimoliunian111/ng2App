import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PublicFuncProvider } from '../../providers/public-func/public-func';

@Component({
  selector: 'jn-showcase',
  templateUrl: 'jn-showcase.html'
})
export class JnShowcaseComponent {
  @Input() caseObj: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public func: PublicFuncProvider) {}
  ItemClick (item) {
    this.func.ItemClick(item)
  }
}