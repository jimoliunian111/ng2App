import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { JnOrderItemComponent } from './jn-order-item';
import { IonicPageModule, IonicModule } from 'ionic-angular';

@NgModule({
  declarations: [JnOrderItemComponent],
  imports: [IonicPageModule.forChild(JnOrderItemComponent), IonicModule],
  exports: [JnOrderItemComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class JnOrderItemComponentModule { }