import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MarvelProvider } from '../../providers/marvel/marvel';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the ComicDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comic-details',
  templateUrl: 'comic-details.html',
})
export class ComicDetailsPage {

  comic : any;
  comicCharacters : any;
  characterOffset:number;
  favComic :boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private marvelProvider:MarvelProvider, private storage:Storage) {
    this.comic = this.navParams.data.comic;
    this.characterOffset =0;
    this.favComic = false;
    
  }

  ionViewDidLoad() {
    
  }

  ionViewWillEnter(){
    var id = this.comic.resourceURI.split('/').pop();
    this.getData(id);
    this.getCharacterdData(id);
    this.checkFavorites();
  }


  getData(id:number){
    return this.marvelProvider.getComic(id).subscribe(
    (res:any)=>{
      this.comic.details =  res.data.results[0];
      this.comic.id = id;
      console.log(this.comic);
    });
  }

  addComicToFavorites(){
    this.storage.get('comics').then((val)=>{
      if (val!= null){
        var comicsStorage : any[] = JSON.parse(val);
        comicsStorage.push(this.comic);
        this.storage.set('comics',JSON.stringify(comicsStorage));
      }else{
        this.storage.set('comics',JSON.stringify([this.comic]));
      }
      this.checkFavorites();
    });
  }


  removeComicFromFavorites(){
    this.storage.get('comics').then((val)=>{
      if (val!= null){
        var oldComicssStorage : any[] = JSON.parse(val);
        var newComicsStorage = oldComicssStorage.filter(comic => comic.id != this.comic.id);
        this.storage.set('comics',JSON.stringify(newComicsStorage));
        this.checkFavorites();
      }
    });
  }

  checkFavorites(){
    //console.log('fav ',this.favComic);
    this.favComic = false;
    this.storage.get('comics').then((val)=>{
      if (val!= null){
        var comicsInStorage : any[] = JSON.parse(val);
        for (const comic of comicsInStorage){
          if (comic.id===this.comic.id){
            this.favComic = true;
          }
        }
      }
    });
  }


  getCharacterdData(id:number){
    return this.marvelProvider.getCharactersInComic(this.characterOffset, id).subscribe(
    (res:any)=>{
      this.comicCharacters =  res.data.results;
      console.log(this.comicCharacters);
    });
  }



}
