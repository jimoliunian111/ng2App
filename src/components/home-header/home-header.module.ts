import { NgModule } from '@angular/core';
import { HomeHeaderComponent } from './home-header';
import { IonicPageModule, IonicModule } from 'ionic-angular';
import { CityListComponentModule } from '../city-list/city-list.module';

@NgModule({
  declarations: [HomeHeaderComponent],
  imports: [IonicPageModule.forChild(HomeHeaderComponent), IonicModule, CityListComponentModule],
  exports: [HomeHeaderComponent]
})
export class HomeHeaderComponentModule { }