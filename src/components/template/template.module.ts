import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule, IonicModule } from 'ionic-angular';
import { TemplateComponent } from './template';
import { BannerComponentModule } from '../banner/banner.module';
import { JnIconComponentModule } from '../jn-icon/jn-icon.module';
import { JnGoodslistComponentModule } from '../jn-goodslist/jn-goodslist.module';
import { JnShowcaseComponentModule } from '../jn-showcase/jn-showcase.module';
import { JnModuleTabComponentModule } from '../jn-module-tab/jn-module-tab.module';
import { JnSwipeMdComponentModule } from '../jn-swipe-md/jn-swipe-md.module';
import { JnSwipeSmComponentModule } from '../jn-swipe-sm/jn-swipe-sm.module';

@NgModule({
  declarations: [TemplateComponent],
  imports: [
    IonicModule,
    IonicPageModule.forChild(TemplateComponent),
    BannerComponentModule,
    JnIconComponentModule,
    JnGoodslistComponentModule,
    JnShowcaseComponentModule,
    JnModuleTabComponentModule,
    JnSwipeMdComponentModule,
    JnSwipeSmComponentModule
  ],
  exports: [TemplateComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class TemplateComponentModule { }