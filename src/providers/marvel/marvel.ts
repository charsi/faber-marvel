import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ENV } from '../../environments/environment';
import { Md5 } from 'ts-md5/dist/md5';
import 'rxjs/add/operator/map';

/*
  Generated class for the MarvelProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MarvelProvider {

  apiPubKey : string;
  apiPvtKey : string;
  url : string;

  constructor(public http: HttpClient) {
    
    this.apiPubKey = ENV.MARVEL_API_PUB_KEY;
    this.apiPvtKey = ENV.MARVEL_API_PVT_KEY;
    this.url = 'https://gateway.marvel.com:443/v1/public/';
    //this.url = 'https://gateway.marvel.com/';
    
    console.log(this.apiPubKey);
    console.log(this.apiPvtKey);

  }

  apiToken(ts):string{
    return Md5.hashStr(ts+this.apiPvtKey+this.apiPubKey).toString();
  }


  getCharacters(offset:number, startsWith?:string){
    var ts : string = new Date().toString();
    var params : any = {
      ts : ts,
      apikey : this.apiPubKey,
      hash: this.apiToken(ts),
      offset: offset.toString()
    };
    if(startsWith){params.nameStartsWith = startsWith;}
    return this.http.get(this.url+'characters', { params:params });
  }

  getComicsWithCharacter(offset:number, characterId:number){
    var ts : string = new Date().toString();
    var params : any = {
      ts : ts,
      apikey : this.apiPubKey,
      hash: this.apiToken(ts),
      offset: offset.toString()
    };
    return this.http.get(this.url+'characters/'+characterId+'/comics', { params:params });
  }

  getComic(id:number){
    var ts : string = new Date().toString();
    var params : any = {
      ts : ts,
      apikey : this.apiPubKey,
      hash: this.apiToken(ts)
    };
    return this.http.get(this.url+'comics/'+id, { params:params });
  }

  getCharactersInComic(offset:number, id:number){
    var ts : string = new Date().toString();
    var params : any = {
      ts : ts,
      apikey : this.apiPubKey,
      hash: this.apiToken(ts),
      offset: offset.toString()
    };
    return this.http.get(this.url+'comics/'+id+'/characters', { params:params });
  }

}
