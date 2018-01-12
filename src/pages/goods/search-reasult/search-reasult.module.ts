import { NgModule } from '@angular/core';
import { SearchReasultPage} from './search-reasult';
import { IonicPageModule, IonicModule } from 'ionic-angular';
import { JnGoodslistComponentModule } from '../../../components/jn-goodslist/jn-goodslist.module'

@NgModule({
  declarations: [SearchReasultPage],
  imports: [IonicPageModule.forChild(SearchReasultPage), IonicModule, JnGoodslistComponentModule],
  exports: [SearchReasultPage]
})
export class SearchReasultPageModule { }