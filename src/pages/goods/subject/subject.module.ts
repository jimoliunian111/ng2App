import { NgModule } from '@angular/core';
import { SubjectPage } from './subject';
import { IonicPageModule } from 'ionic-angular';
import { JnGoodslistComponentModule } from '../../../components/jn-goodslist/jn-goodslist.module'

@NgModule({
  declarations: [SubjectPage],
  imports: [IonicPageModule.forChild(SubjectPage), JnGoodslistComponentModule],
})
export class SubjectPageModule { }