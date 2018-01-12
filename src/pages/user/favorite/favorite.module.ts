import { NgModule } from '@angular/core';
import { FavoritePage} from './favorite';
import { IonicPageModule } from 'ionic-angular';
import { JnGoodslistComponentModule } from '../../../components/jn-goodslist/jn-goodslist.module';

@NgModule({
  declarations: [FavoritePage],
  imports: [IonicPageModule.forChild(FavoritePage), JnGoodslistComponentModule]
})
export class FavoritePageModule { }