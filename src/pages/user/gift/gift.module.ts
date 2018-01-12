import { NgModule } from '@angular/core';
import { GiftPage} from './gift';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [GiftPage],
  imports: [IonicPageModule.forChild(GiftPage)],
})
export class GiftPageModule { }