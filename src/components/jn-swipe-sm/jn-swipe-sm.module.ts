import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { JnSwipeSmComponent } from './jn-swipe-sm';
import { IonicPageModule, IonicModule } from 'ionic-angular';

@NgModule({
  declarations: [JnSwipeSmComponent],
  imports: [IonicPageModule.forChild(JnSwipeSmComponent), IonicModule],
  exports: [JnSwipeSmComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class JnSwipeSmComponentModule { }