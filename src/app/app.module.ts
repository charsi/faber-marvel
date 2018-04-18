import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { CharacterDetailsPage } from '../pages/character-details/character-details';
import { SettingsPage } from '../pages/settings/settings';
import { ComicsListPage } from '../pages/comics-list/comics-list';
import { ComicDetailsPage } from '../pages/comic-details/comic-details';
import { FavoritesPage } from '../pages/favorites/favorites';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MarvelProvider } from '../providers/marvel/marvel';
import { HttpClientModule } from '@angular/common/http';
import {IonicStorageModule} from '@ionic/storage';
//import { CharacterDetailsPageModule } from '../pages/character-details/character-details.module';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    CharacterDetailsPage,
    SettingsPage,
    ComicsListPage,
    ComicDetailsPage,
    FavoritesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    CharacterDetailsPage,
    SettingsPage,
    ComicsListPage,
    ComicDetailsPage,
    FavoritesPage
  ],
  providers: [
    HttpClientModule,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MarvelProvider
    
  ]
})
export class AppModule {}
