import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BannerComponent } from './banner';
import { IonicPageModule, IonicModule } from 'ionic-angular';

@NgModule({
  declarations: [BannerComponent],
  imports: [IonicPageModule.forChild(BannerComponent), IonicModule],
  exports: [BannerComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class BannerComponentModule { }