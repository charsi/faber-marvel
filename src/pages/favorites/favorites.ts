import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
 
  characters : any ;
  comics : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage:Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
  }

  ionViewWillEnter(){
    this.storage.get('characters').then((val)=>{
      if (val!= null){
        this.characters = JSON.parse(val);
      }
      console.log(val);
    });

    this.storage.get('comics').then((val)=>{
      if (val!= null){
        this.comics = JSON.parse(val);
      }
      console.log(val);
    });
  } 
}
