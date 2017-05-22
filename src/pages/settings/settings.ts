import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

/**
 * Generated class for the Settings page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private sqlite: SQLite) {
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    }).then((db : SQLiteObject) => {
      db.executeSql('create table config(def_city varchar(32))', {})
        .then(() => console.log('Executed SQL'))
        .catch(e => console.log(e));
    })
    .catch(e => console.log(e));

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Settings');
  }

}
