import { NgModule } from '@angular/core';
import { JnTopnavComponent } from './jn-topnav';
import { IonicPageModule, IonicModule } from 'ionic-angular';
//import { ModuleTemplateComponentModule } from '../module-template/module-template.module';
import { TemplateComponentModule } from '../template/template.module';

@NgModule({
  declarations: [JnTopnavComponent],
  imports: [IonicPageModule.forChild(JnTopnavComponent), IonicModule, TemplateComponentModule],
  exports: [
    JnTopnavComponent
  ]
})
export class JnTopnavComponentModule { }