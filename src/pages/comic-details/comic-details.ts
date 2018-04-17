import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MarvelProvider } from '../../providers/marvel/marvel';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private marvelProvider:MarvelProvider) {
    this.comic = this.navParams.data.comic;
    
  }

  ionViewDidLoad() {
    
  }

  ionViewWillEnter(){
    var id = this.comic.resourceURI.split('/').pop();
    this.getData(id);
  }


  getData(id:number){
    return this.marvelProvider.getComic(id).subscribe(
      (res:any)=>{
        this.comic.details =  res.data.results[0];
        this.comic.id = id;
        console.log(this.comic);
      });
  }
}
