import { Component , ViewChild} from '@angular/core';

import {NavController, Nav} from 'ionic-angular';
import {Page1} from "../page1/page1";
import {Page2} from "../page2/page2";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Page1;

  pages: Array<{title: string, component: any}>;

  constructor(public navCtrl: NavController) {
    // used for an example of ngFor and navigation
    this.pages = [
      { title: '热点新闻', component: Page1 },
      { title: '娱乐新闻', component: Page2 }
    ];
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }

}
