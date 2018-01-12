import { NgModule } from '@angular/core';
import { CartPage} from './cart';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [CartPage],
  imports: [IonicPageModule.forChild(CartPage)],
})
export class CartPageModule { }
