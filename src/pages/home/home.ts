import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MarvelProvider } from '../../providers/marvel/marvel';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  characters : any;
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
      (res)=>{
        this.characters.push.apply(this.characters, res.data.results );
        this.offset += 20;
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
      (res)=>{
        this.characters.push.apply(this.characters, res.data.results );
        console.log(this.characters, this.nameInput);
      });
  }

}
