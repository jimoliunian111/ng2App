import { NgModule } from '@angular/core';
import { HomePage} from './home';
import { IonicPageModule } from 'ionic-angular';
import { ModuleTemplateComponentModule } from '../../../components/module-template/module-template.module';
import { HomeHeaderComponentModule } from '../../../components/home-header/home-header.module';

@NgModule({
  declarations: [HomePage],
  entryComponents: [
    HomePage
  ],
  imports: [IonicPageModule.forChild(HomePage), HomeHeaderComponentModule, ModuleTemplateComponentModule],
  exports: [
    HomePage
  ]
})
export class HomePageModule { }