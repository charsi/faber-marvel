import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ComicDetailsPage } from '../comic-details/comic-details';
import { MarvelProvider } from '../../providers/marvel/marvel';

/**
 * Generated class for the ComicsListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comics-list',
  templateUrl: 'comics-list.html',
})
export class ComicsListPage {

  character : any;
  offset : number; 

  constructor(public navCtrl: NavController, public navParams: NavParams, private marvelProvider:MarvelProvider) {
    this.character= this.navParams.data.character;
    this.offset = 0;
  }

  ionViewDidLoad() {
  }

  doInfinite(scroll){
    return this.marvelProvider.getComicsWithCharacter(this.offset+20, this.character.id).subscribe(
      (res:any)=>{
        var newComics = res.data.results; 
        this.character.comics.items.push.apply(this.character.comics.items, newComics );
        this.offset += 20;
        console.log(this.character);   
        scroll.complete();
      });
    
  }

  goToComicDetail(comic){
    this.navCtrl.push(ComicDetailsPage,{comic:comic});
  }
}
