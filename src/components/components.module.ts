import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { BannerComponent } from './banner/banner';
import { HomeHeaderComponent } from './home-header/home-header';
import { JnGoodslistComponent } from './jn-goodslist/jn-goodslist';
import { JnIconComponent } from './jn-icon/jn-icon';
import { JnModuleTabComponent } from './jn-module-tab/jn-module-tab';
import { JnProductComponent } from './jn-product/jn-product';
import { JnShowcaseComponent } from './jn-showcase/jn-showcase';
import { JnSwipeMdComponent } from './jn-swipe-md/jn-swipe-md';
import { JnSwipeSmComponent } from './jn-swipe-sm/jn-swipe-sm';
import { JnTabRankComponent } from './jn-tab-rank/jn-tab-rank';
import { JnTopnavComponent } from './jn-topnav/jn-topnav';
import { ModuleTemplateComponent } from './module-template/module-template';
import { FlyCarComponent } from './fly-car/fly-car';

export const components = [

]
@NgModule({
	declarations: [
	  BannerComponent,
	  HomeHeaderComponent,
	  JnGoodslistComponent,
	  JnIconComponent,
	  JnModuleTabComponent,
	  JnProductComponent,
	  JnShowcaseComponent,
	  JnSwipeMdComponent,
	  JnSwipeSmComponent,
	  JnTabRankComponent,
	  JnTopnavComponent,
	  ModuleTemplateComponent,
    FlyCarComponent
	],
	imports: [IonicModule],
	exports: [
	  BannerComponent,
	  HomeHeaderComponent,
	  JnGoodslistComponent,
	  JnIconComponent,
	  JnModuleTabComponent,
	  JnProductComponent,
	  JnShowcaseComponent,
	  JnSwipeMdComponent,
	  JnSwipeSmComponent,
	  JnTabRankComponent,
	  JnTopnavComponent,
	  ModuleTemplateComponent,
    FlyCarComponent
	]
})
export class ComponentsModule {}
