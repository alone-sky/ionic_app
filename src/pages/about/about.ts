import { Component , ViewChild} from '@angular/core';

import {NavController, Nav} from 'ionic-angular';
import {Page1} from "../page1/page1";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Page1;

  pages: Array<{title: string, component: any,id:number}>;

  constructor(public navCtrl: NavController) {
    // used for an example of ngFor and navigation
    this.pages = [
      { title: '热点新闻', component: Page1, id:1 },
      { title: '娱乐新闻', component: Page1, id:2 }
    ];
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component,{page:page});
  }

}
