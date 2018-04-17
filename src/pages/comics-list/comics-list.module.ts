import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComicsListPage } from './comics-list';

@NgModule({
  declarations: [
    ComicsListPage,
  ],
  imports: [
    IonicPageModule.forChild(ComicsListPage),
  ],
})
export class ComicsListPageModule {}
