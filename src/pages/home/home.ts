import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MarvelProvider } from '../../providers/marvel/marvel';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  charactersData : any;
  offset : number;
  nameInput:string;

  constructor(public navCtrl: NavController, private marvelProvider:MarvelProvider) {
    this.offset = 0;
    this.charactersData = {results:[]};
  }

  ionViewWillEnter(){
    this.getData();
  }
  
  doInfinite(scroll){
    return this.marvelProvider.getCharacters(this.offset+20, this.nameInput).subscribe(
      (res)=>{
        this.charactersData.results.push.apply(this.charactersData.results, res.data.results );
        this.offset += 20;
        scroll.complete();
      });
    
  }

  search(ev){
    this.offset = 0;
    this.charactersData = {results:[]};
    this.nameInput = ev.target.value;
    this.getData();
  }

  cancel(){
    this.offset = 0;
    this.charactersData = {results:[]};
    this.getData();
  }

  getData(){
    return this.marvelProvider.getCharacters(this.offset, this.nameInput).subscribe(
      (res)=>{
        this.charactersData.results.push.apply(this.charactersData.results, res.data.results );
        console.log(this.charactersData, this.nameInput);
      });
  }

}
