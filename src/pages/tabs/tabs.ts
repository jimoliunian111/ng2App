import { Component, ViewChild } from '@angular/core';
import { NavController, Platform, Tabs, IonicPage } from 'ionic-angular';
import { BackButtonService } from "../../services/backButton.service";

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

  cartNum: number = 0
  constructor(public navCtrl: NavController,
              public backButtonService: BackButtonService,
              private platform: Platform) {

    platform.ready().then(() => {
        this.backButtonService.registerBackButtonAction(this.tabRef);
    });
  }

}
