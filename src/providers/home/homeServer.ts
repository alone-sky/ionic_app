// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import {Jsonp} from "@angular/http";
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
/*
  Generated class for the HomeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class HomeProvider {
  private url:string='https://m.baidu.com/feed/data/tab/getvideolist?sid=122102_102571_114550_123233_114745_123732_120125_118880_118876_118848_118833_118801_123617_107316_117332_117432_122788_123572_123814_123557_123808_121143_123782_123980_110085_123290&ssid=0&from=0&pu=sz%25401320_2001%252Cta%2540iphone_1_11.0_3_604&qid=3576383489&ms=1&channel_id=2&source=wise_feed_videotab&direction=main&async=0&startlistnum=1&_=1527753623865';
  getHeroes(): Observable<Hero[]> {//未通过httpClient来获取数据
    return Observable.of(HEROES);
  }

  constructor(public jsonp:Jsonp ) {//public http: HttpClient

  }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    return  Observable.of(HEROES.find(hero => hero.id === id));
  }

}
