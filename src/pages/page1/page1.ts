import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { HomeProvider } from '../../providers/home/homeServer';
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
  news:any;
  constructor(public navCtrl: NavController,public navParams:NavParams,public homeProvider:HomeProvider) {
    this.page = navParams.get('page');
  }
  ngOnInit() {
    this.getPage();
    this.homeProvider.getHero(this.page.id)
      .subscribe(news => {this.news = news.arr;console.log(news,'88')});

  }

  getPage():void{
    if(this.page){

    }else{
      this.page={'title':'热点新闻',id:1}
    }

  }

  ionViewDidLoad() {
    console.log('Hello Page1 Page');
  }

}
