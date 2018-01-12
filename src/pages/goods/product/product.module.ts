import { NgModule } from '@angular/core';
import { ProductPage} from './product';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [ProductPage],
  imports: [IonicPageModule.forChild(ProductPage)]
})
export class ProductPageModule { }