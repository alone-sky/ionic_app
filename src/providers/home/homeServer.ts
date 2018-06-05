// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import {Jsonp} from "@angular/http";
import { HEROES } from './mock-heroes';
/*
  Generated class for the HomeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class HomeProvider {
  getHeroes(): Observable<any> {//未通过httpClient来获取数据
    return Observable.of(HEROES);
  }

  constructor(public jsonp:Jsonp ) {//public http: HttpClient

  }

  getHero(id: number): Observable<any> {
    // TODO: send the message _after_ fetching the hero
    return  Observable.of(HEROES.find(
      hero => {
        if(hero.id === id){
          return hero
        }
      })
    );
  }

}
