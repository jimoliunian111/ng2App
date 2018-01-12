import { NgModule } from '@angular/core';
import { SearchPage} from './search';
import { IonicPageModule } from 'ionic-angular';
import { JnGoodslistComponentModule } from '../../../components/jn-goodslist/jn-goodslist.module'

@NgModule({
  declarations: [SearchPage],
  imports: [IonicPageModule.forChild(SearchPage), JnGoodslistComponentModule]
})
export class SearchPageModule { }