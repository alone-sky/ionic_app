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

  pages: Array<{title: string, component: any,type:string}>;

  constructor(public navCtrl: NavController) {
    // used for an example of ngFor and navigation
    this.pages = [
      { title: '体育新闻', component: Page1, type:'news_sports' },
      { title: '科技新闻', component: Page1, type:'news_tech' },
      { title: '军事新闻', component: Page1, type:'news_military' },
      { title: '国际新闻', component: Page1, type:'news_world' },
      { title: '时尚新闻', component: Page1, type:'news_fashion' }
    ];
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component,{page:page});
  }

}
