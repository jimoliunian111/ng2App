import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule, IonicModule } from 'ionic-angular';
import { FlyCarComponent } from './fly-car';

@NgModule({
  declarations: [FlyCarComponent],
  imports: [IonicPageModule.forChild(FlyCarComponent), IonicModule],
  exports: [FlyCarComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class FlyCarComponentModule { }