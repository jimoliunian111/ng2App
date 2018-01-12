import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { JnIconComponent } from './jn-icon';
import { IonicPageModule, IonicModule } from 'ionic-angular';

@NgModule({
  declarations: [JnIconComponent],
  imports: [IonicPageModule.forChild(JnIconComponent), IonicModule],
  exports: [JnIconComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class JnIconComponentModule { }