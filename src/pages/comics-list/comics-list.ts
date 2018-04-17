import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ComicDetailsPage } from '../comic-details/comic-details';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.character= this.navParams.data.character;
  }

  ionViewDidLoad() {
  }

  goToComicDetail(comic){
    this.navCtrl.push(ComicDetailsPage,{comic:comic});
  }
}
