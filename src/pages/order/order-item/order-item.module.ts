import { NgModule } from '@angular/core';
import { OrderItemPage } from './order-item';
import { IonicPageModule } from 'ionic-angular';
import { JnGoodslistComponentModule } from '../../../components/jn-goodslist/jn-goodslist.module';

@NgModule({
  declarations: [OrderItemPage],
  imports: [IonicPageModule.forChild(OrderItemPage), JnGoodslistComponentModule]
})
export class OrderItemPageModule { }