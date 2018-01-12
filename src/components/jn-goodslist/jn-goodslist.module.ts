import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule, IonicModule } from 'ionic-angular';
import { JnGoodslistComponent } from './jn-goodslist';
import { JnProductComponentModule } from '../jn-product/jn-product.module';

@NgModule({
  declarations: [JnGoodslistComponent],
  imports: [IonicPageModule.forChild(JnGoodslistComponent), IonicModule, JnProductComponentModule],
  exports: [JnGoodslistComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class JnGoodslistComponentModule { }