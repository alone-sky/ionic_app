import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { news_sports,news_tech,news_military,news_world,news_fashion} from '../../utils/constants';
/*
  Generated class for the SearchProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SearchProvider {

  constructor(public http: HttpClient) {
    console.log('Hello SearchProvider Provider');
  }

  //体育新闻
  newsSports(): Observable<any> {
    return this.http.get(
      news_sports
    ).map(res => {
      return res;
    })
  };
  //科技新闻
  newsTech(): Observable<any> {
    return this.http.get(
      news_tech
    ).map(res => {
      return res;
    })
  }
  //军事新闻
  newsMilitary():Observable<any> {
    return this.http.get(
      news_military
    ).map(res => {
      return res;
    })
  }
  //国际新闻
  newsWorld():Observable<any> {
    return this.http.get(
      news_world
    ).map(res => {
      return res;
    })
  }
  //时尚新闻
  newsFashion():Observable<any> {
    return this.http.get(
      news_fashion
    ).map(res => {
      return res;
    })
  }


}
