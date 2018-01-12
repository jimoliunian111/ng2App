import { NgModule } from '@angular/core';
import { AccountSafePage } from './account-safe';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [AccountSafePage],
  imports: [IonicPageModule.forChild(AccountSafePage)]
})
export class AccountSafePageModule { }