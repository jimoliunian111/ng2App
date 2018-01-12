import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { JnSwipeMdComponent } from './jn-swipe-md';
import { IonicPageModule, IonicModule } from 'ionic-angular';

@NgModule({
  declarations: [JnSwipeMdComponent],
  imports: [IonicPageModule.forChild(JnSwipeMdComponent), IonicModule],
  exports: [JnSwipeMdComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class JnSwipeMdComponentModule { }