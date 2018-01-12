import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
// import { StoreModule } from '@ngrx/store';
// import { AppModuleNgFactory } from './app.module.ngfactory';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPageModule } from '../pages/tabs/tabs.module';
import { Api } from '../providers/api';
import { ApiProvider } from '../providers/api/api';
import { PublicFuncProvider } from '../providers/public-func/public-func';
import { ModuleApiProvider } from '../providers/module-api/module-api';
import { BackButtonService } from '../services/backButton.service';


@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpModule,
    TabsPageModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: '返回',
      iconMode: 'ios',
      modalEnter: 'modal-fade-in',
      modalLeave: 'modal-fade-out',
      mode: 'ios',
      activator: 'ripple',
      pageTransition: 'md-transition',
      tabsHighlight: true,
      swipeBackEnabled: true,
      tabsHideOnSubPages: true
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Api,
    ApiProvider,
    ModuleApiProvider,
    PublicFuncProvider,
    BackButtonService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
