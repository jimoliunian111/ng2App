import { Component, ViewChild } from '@angular/core';
import { NavController, Platform, Tabs, IonicPage } from 'ionic-angular';
import { BackButtonService } from "../../services/backButton.service";

//import { HomePage } from '../home/home';
//import { CategoryPage } from '../category/category';
//import { ProfilePage } from '../profile/profile';
//import { CartPage } from '../cart/cart';
//import { BrandListPage } from '../brand-list/brand-list';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
@ViewChild('myTabs') tabRef: Tabs;
  tab1Root: any = 'HomePage';
  tab2Root: any = 'CategoryPage';
  tab3Root: any = 'VenderPage';
  tab4Root: any = 'CartPage';
  tab5Root: any = 'ProfilePage';


  constructor(public navCtrl: NavController,
              public backButtonService: BackButtonService,
              private platform: Platform) {

    platform.ready().then(() => {
        this.backButtonService.registerBackButtonAction(this.tabRef);
    });
  }
}
