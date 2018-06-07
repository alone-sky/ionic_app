import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchProvider } from '../../providers/search/search';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  newsSpors: any;
  constructor(public navCtrl: NavController,public searchProvider:SearchProvider) {

  }

  ngOnInit() {
    this.getNewSports();
  }

  getNewSports() {
    this.searchProvider.newsSports().subscribe(
      data => {
        this.newsSpors = data.data;
        console.log(this.newsSpors)
      },
      error => {
      }
    );
  };

}
