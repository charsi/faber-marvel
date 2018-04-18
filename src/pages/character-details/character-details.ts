import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ComicsListPage } from '../comics-list/comics-list';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the CharacterDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-character-details',
  templateUrl: 'character-details.html',
})
export class CharacterDetailsPage {

  character : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage:Storage) {
    this.character = this.navParams.data.character;
    console.log(this.character);
  }

  ionViewDidLoad() { 
  }

  ionViewWillEnter(){
    
  }

  goToComicsList(character){
    this.navCtrl.push(ComicsListPage,{character:character});
  }

  addCharacterToFavorites(){
    this.storage.get('characters').then((val)=>{
      if (val!= null){
        var oldCharactersStorage : any[] = JSON.parse(val);
        oldCharactersStorage.push(this.character);
        this.storage.set('characters',JSON.stringify(oldCharactersStorage));
      }else{
        this.storage.set('characters',JSON.stringify([this.character]));
      }
      console.log(val);
    });
  }

}
