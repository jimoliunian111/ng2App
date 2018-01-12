import { NgModule } from '@angular/core';
import { CustomPage} from './custom';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [CustomPage],
  imports: [IonicPageModule.forChild(CustomPage)]
})
export class CustomPageModule { }