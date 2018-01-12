import { NgModule } from '@angular/core';
import { CityListComponent } from './city-list';
import { IonicPageModule, IonicModule } from 'ionic-angular';

@NgModule({
  declarations: [CityListComponent],
  imports: [IonicPageModule.forChild(CityListComponent),IonicModule],
  exports: [CityListComponent]
})
export class CityListComponentModule { }