import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CharacterDetailsPage } from './character-details';

@NgModule({
  declarations: [
    CharacterDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(CharacterDetailsPage),
  ],
})
export class CharacterDetailsPageModule {}
