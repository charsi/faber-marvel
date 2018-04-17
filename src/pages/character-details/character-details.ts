import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.character= this.navParams.data.character;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CharacterDetailsPage');
    
  }

}
