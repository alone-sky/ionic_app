import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { SearchProvider } from '../../providers/search/search';
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
  page:any;
  newsSpors:any;//体育
  constructor(public navCtrl: NavController,public navParams:NavParams,public searchProvider:SearchProvider) {
    this.page = navParams.get('page');
  }
  ngOnInit() {
    this.getPage();
    this.getDate();

  }

  getPage():void{
    if(this.page){

    }else{
      this.page= { title: '体育新闻', component: Page1, type:'news_sports' };
    }

  }
  //获取数据
  getDate():void{
    if(this.page.type=='news_sports'){
      this.searchProvider.newsSports().subscribe(
        data => {
          this.newsSpors = data.data;
          console.log(this.newsSpors)
        },
        error => {
        }
      );
    }

    if(this.page.type=='news_tech'){
      this.searchProvider.newsTech().subscribe(
        data => {
          this.newsSpors = data.data;
          console.log(this.newsSpors)
        },
        error => {
        }
      );
    }

    if(this.page.type=='news_military'){
      this.searchProvider.newsMilitary().subscribe(
        data => {
          this.newsSpors = data.data;
          console.log(this.newsSpors)
        },
        error => {
        }
      );
    }

    if(this.page.type=='news_world'){
      this.searchProvider.newsWorld().subscribe(
        data => {
          this.newsSpors = data.data;
          console.log(this.newsSpors)
        },
        error => {
        }
      );
    }

    if(this.page.type=='news_fashion'){
      this.searchProvider.newsFashion().subscribe(
        data => {
          this.newsSpors = data.data;
          console.log(this.newsSpors)
        },
        error => {
        }
      );
    }
  }

  ionViewDidLoad() {
    console.log('Hello Page1 Page');
  }

}
