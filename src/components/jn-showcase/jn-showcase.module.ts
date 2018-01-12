import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { JnShowcaseComponent } from './jn-showcase';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [JnShowcaseComponent],
  imports: [IonicPageModule.forChild(JnShowcaseComponent)],
  exports: [JnShowcaseComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class JnShowcaseComponentModule { }