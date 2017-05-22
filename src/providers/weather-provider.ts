import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class WeatherProvider {
  private apiKey = 'e35053d05a2d416283cbe70fcf58d3ad';
  private apiURL = 'http://api.openweathermap.org/data/2.5/weather';

  constructor(public http: Http) {
    console.log('Hello WeatherProvider Provider');
  }

  getWeatherByCityName(city: String){
    return this.http.get(this.apiURL + '?q=' + city + '&units=imperial&appid=' + this.apiKey )
      .map(res => res.json());

  }

  getWeatherByLocation(coords){

  }

}
