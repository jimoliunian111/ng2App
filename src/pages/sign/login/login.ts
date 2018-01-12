import { Component } from '@angular/core';
import { NavController, ToastController, IonicPage } from 'ionic-angular';

import { ApiProvider } from '../../../providers/api/api';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  account: { username: string, password: string } = {
    username: '',
    password: ''
  };

  constructor(public navCtrl: NavController,
    public ApiProvider: ApiProvider,
    public toastCtrl: ToastController) {
  }

  doLogin() {
    this.ApiProvider.SignIn(this.account).subscribe((resp) => {
    	console.log('登录数据', resp)
    	if (resp.error_code === 0) {
    		localStorage.setItem('Token', resp.token)
    		localStorage.setItem('user-info', JSON.stringify(resp))
    		this.navCtrl.push('TabsPage')
      }
    }, (err) => {
    });
  }
  goSignUp() {
  	this.navCtrl.push('SignupPage')
  }
  loginForCode () {
  	this.navCtrl.push('SignupPage')
  }
  loginForget () {
  	this.navCtrl.push('SignupPage')
  }
}
