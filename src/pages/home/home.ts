import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomeProvider } from '../../providers/home/homeServer';
import { Hero } from '../../providers/home/Hero';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  heroes: Hero[];

  constructor(public navCtrl: NavController,public HomeProviders:HomeProvider) {

  }

  ngOnInit() {
    this.getHeroes();
    console.log(this.heroes);
  }

  getHeroes(): void {
    this.HomeProviders.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  getDetailNews():void{

  }

}
