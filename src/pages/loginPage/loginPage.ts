import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';

@Component({
  selector: 'page-login',
  templateUrl: './loginPage.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {

  }

redirectToSignupPage(){
  this.navCtrl.push(SignupPage);
}

}
