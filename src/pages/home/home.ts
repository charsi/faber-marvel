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

  constructor(public navCtrl: NavController, private marvelProvider:MarvelProvider) {
    this.offset=0;
  }

  ionViewWillEnter(){
    this.marvelProvider.getCharacters(0).subscribe(
      (res)=>{
        this.charactersData = res.data;
        console.log(this.charactersData);
      });
  }
  
  doInfinite(scroll){
    
    this.marvelProvider.getCharacters(this.offset+20).subscribe(
      (res)=>{
        console.log(res);
        this.charactersData.results.push.apply(this.charactersData.results, res.data.results );
        console.log(this.charactersData);
        this
        this.offset += 20;
        scroll.complete();
      });
    
    
  }

}
