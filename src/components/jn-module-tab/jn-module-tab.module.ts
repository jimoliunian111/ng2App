import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { JnModuleTabComponent } from './jn-module-tab';
import { IonicPageModule, IonicModule } from 'ionic-angular';

@NgModule({
  declarations: [JnModuleTabComponent],
  imports: [IonicPageModule.forChild(JnModuleTabComponent), IonicModule],
  exports: [JnModuleTabComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class JnModuleTabComponentModule { }