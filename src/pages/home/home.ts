import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather-provider';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [WeatherProvider]
  
})
export class HomePage {

  forecast : any = {
    city: '',
    weather: {},
    data: {}
  };

  city : string;

  constructor(public navCtrl: NavController, public wProvider: WeatherProvider) {
    this.city = 'Araras';  

  }

  updateWeather(city){
    this.wProvider.getWeatherByCityName(this.city + ',BR')
      .subscribe(res => {
        console.log(res);
        this.forecast.weather = res.weather[0];      
        this.forecast.data = res.main;
        this.forecast.city = res.name;
        console.log(this.forecast);
        
    });

  }

  ionViewDidEnter(){
    this.updateWeather(this.city); 
  }

}
