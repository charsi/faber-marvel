import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MarvelProvider } from '../../providers/marvel/marvel';
import { CharacterDetailsPage } from '../character-details/character-details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  characters : any[];
  offset : number;
  nameInput:string;

  constructor(public navCtrl: NavController, private marvelProvider:MarvelProvider) {
    this.offset = 0;
    this.characters = [];
  }

  ionViewWillEnter(){
    this.getData();
  }
  
  doInfinite(scroll){
    return this.marvelProvider.getCharacters(this.offset+20, this.nameInput).subscribe(
      (res:any)=>{
        var newCharacters = this.addImageInfo(res.data.results); 
        this.characters.push.apply(this.characters, newCharacters );
        this.offset += 20;
        console.log(this.characters);   
        scroll.complete();
      });
    
  }

  search(ev){
    this.offset = 0;
    this.characters = [];
    this.nameInput = ev.target.value;
    this.getData();
  }

  cancel(){
    this.offset = 0;
    this.characters = [];
    this.getData();
  }

  getData(){
    return this.marvelProvider.getCharacters(this.offset, this.nameInput).subscribe(
      (res:any)=>{
        var newCharacters = this.addImageInfo(res.data.results); 
        this.characters.push.apply(this.characters, newCharacters );
        console.log(this.characters);
      });
  }

  goToCharacterDetail(character:any){
    this.navCtrl.push(CharacterDetailsPage,{character:character});
  }

  // checks if image is real
  addImageInfo(characters){
    var charsOut = [];
    for (const character of characters){
      var imgUrl = character.thumbnail.path;
      if (imgUrl.split('/').pop()==='image_not_available'){
        character.thumbnail.available = false;
      } else {
        character.thumbnail.available = true;
      }
      charsOut.push(character);
    }
    return charsOut;
  }

}
