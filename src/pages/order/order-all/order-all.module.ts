import { NgModule } from '@angular/core';
import { OrderAllPage } from './order-all';
import { IonicPageModule } from 'ionic-angular';
import { JnGoodslistComponentModule } from '../../../components/jn-goodslist/jn-goodslist.module';
import { JnOrderItemComponentModule } from '../../../components/jn-order-item/jn-order-item.module';

@NgModule({
  declarations: [OrderAllPage],
  imports: [IonicPageModule.forChild(OrderAllPage), JnGoodslistComponentModule, JnOrderItemComponentModule]
})
export class OrderAllPageModule { }