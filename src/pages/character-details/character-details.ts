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
  favCharacter : boolean ;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage:Storage) {
    this.character = this.navParams.data.character;
    console.log(this.character);
    this.favCharacter = false;
  }

  ionViewDidLoad() { 
  }

  ionViewWillEnter(){
    this.checkFavorites();
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
      this.checkFavorites();
    });
  }

  removeCharacterFromFavorites(){
    this.storage.get('characters').then((val)=>{
      if (val!= null){
        var oldCharactersStorage : any[] = JSON.parse(val);
        var newCharacterStorage = oldCharactersStorage.filter(character => character.id != this.character.id);
        this.storage.set('characters',JSON.stringify(newCharacterStorage));
        this.checkFavorites();
      }
      
    });
  }

  checkFavorites(){
    this.favCharacter = false;
    this.storage.get('characters').then((val)=>{
      if (val!= null){
        var charactersInStorage : any[] = JSON.parse(val);
        for (const character of charactersInStorage){
          if (character.id===this.character.id){
            this.favCharacter = true;
          }
        }
      }
    });
  }

}
