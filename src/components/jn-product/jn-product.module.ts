import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { JnProductComponent } from './jn-product';
import { IonicPageModule, IonicModule } from 'ionic-angular';
import { FlyCarComponentModule } from '../fly-car/fly-car.module'

@NgModule({
  declarations: [JnProductComponent],
  imports: [IonicPageModule.forChild(JnProductComponent), IonicModule, FlyCarComponentModule],
  exports: [JnProductComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class JnProductComponentModule { }