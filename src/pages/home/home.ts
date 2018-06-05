import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomeProvider } from '../../providers/home/homeServer';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  heroes: any;

  constructor(public navCtrl: NavController,public HomeProviders:HomeProvider) {

  }

  ngOnInit() {
    this.getHeroes();
    console.log(this.heroes);
  }

  getHeroes(): void {
    this.HomeProviders.getHeroes()
      .subscribe(heroes => {
          for(var i=0;i<heroes.length;i++){
            this.heroes=heroes[0].arr;//热点新闻
          }
      });
  }

  getDetailNews():void{

  }

}
