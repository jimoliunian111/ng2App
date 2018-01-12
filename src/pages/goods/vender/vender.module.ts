import { NgModule } from '@angular/core';
import { VenderPage} from './vender';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [VenderPage],
  imports: [IonicPageModule.forChild(VenderPage)],
})
export class VenderPageModule { }
