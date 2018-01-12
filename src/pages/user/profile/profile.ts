import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { ApiProvider } from '../../../providers/api/api'


/**
 * The Settings page is a simple form that syncs with a Settings provider
 * to enable the user to customize settings for the app.
 *
 */
@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  userInfo: Object;
  userData: Object;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public api: ApiProvider) {

  }
  ionViewWillEnter () {
    if (!localStorage.getItem('user-info')) {
      this.navCtrl.push('LoginPage')
      return
    } else {
      this.userInfo = JSON.parse(localStorage.getItem('user-info'))
    }
    this.init()
  }
  ionViewDidLoad() {  }

  ngOnChanges() {
    console.log('Ng All Changes');
  }
  init () {
    this.getData()
  }
  getData () {
    this.api.GetUserData({}).subscribe(resp => {
      if (resp.error_code === 0) {
        console.log('用户信息', resp)
        this.userData = resp.user
      }
    })
  }
  goView (path, params?) {
    console.log(132132)
    this.navCtrl.push(path, params)
  }
  goHelp () {
    console.log('点击事件tap', window)
    window.location.href = 'http://m.freshjn.com/h5/about/user-help';
  }
}
