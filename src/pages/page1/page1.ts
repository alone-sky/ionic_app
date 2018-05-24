import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
 Generated class for the Page1 page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Page1 Page');
  }

}
