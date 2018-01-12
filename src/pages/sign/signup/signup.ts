import { Component } from '@angular/core';
import { NavController, ToastController, IonicPage } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { name: string, email: string, password: string } = {
    name: 'Test Human',
    email: 'test@example.com',
    password: 'test'
  };


  constructor(public navCtrl: NavController,
    public toastCtrl: ToastController) {

  }

  doSignup() {

  }
}
