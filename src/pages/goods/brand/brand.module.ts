import { NgModule } from '@angular/core';
import { BrandPage} from './brand';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [BrandPage],
  imports: [IonicPageModule.forChild(BrandPage)]
})
export class BrandPageModule { }