import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-signup',
  templateUrl: './signup.html'
})
export class SignupPage {

  user: any;
  constructor(public navCtrl: NavController) {
    this.user = {
      name: null,
      password: null
    }
  }

  createUser() {
    
  }

  redirectToLogin() {
    this.navCtrl.pop()
  }

}
