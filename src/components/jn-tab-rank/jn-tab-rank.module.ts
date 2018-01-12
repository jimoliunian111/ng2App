import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { JnTabRankComponent } from './jn-tab-rank';
import { IonicPageModule, IonicModule } from 'ionic-angular';

@NgModule({
  declarations: [JnTabRankComponent],
  imports: [IonicPageModule.forChild(JnTabRankComponent), IonicModule],
  exports: [JnTabRankComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class JnTabRankComponentModule { }