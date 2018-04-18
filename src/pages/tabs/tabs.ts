import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';

import { FavoritesPage } from '../favorites/favorites';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;


  constructor(public navCtrl: NavController) {

  }

  goToFavorites(){
    this.navCtrl.push(FavoritesPage);
  }
}
