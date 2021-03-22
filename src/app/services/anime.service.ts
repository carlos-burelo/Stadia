import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from './localStorage.service';
import { AnimeI } from '../models/anime';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  // developer environment, to build the API follow this repository:
  // https://github.com/atleugim/monoschinos-api
  // Original api credits to atleugim
  URL_API = 'https://api-monoschinos.herokuapp.com/api/v1'; //Production API

  constructor(public http: HttpClient, public localSvc: LocalStorageService) { }
  getLastest(){
    return this.http.get<any[]>(`${this.URL_API}/lastest`);
  }
  getEmision(page:any){
    return this.http.get<any[]>(`${this.URL_API}/emision?page=${page}`);
  }
  getCategory(category:any, page:number ){
    return this.http.get<any[]>(`${this.URL_API}/category/${category}?page=${page}`);
  }
  getEpisode(id:any){
    return this.http.get<any[]>(`${this.URL_API}/episode/${id}`);
  }
  getAnimes(page?:number){
      return this.http.get<any[]>(`${this.URL_API}/animes?page=${page}`);
  }
  getAnime(id:any){
    return this.http.get<any[]>(`${this.URL_API}/anime/${id}`);
  }
  getGenders(){
    return this.http.get<any[]>(`${this.URL_API}/genders`);
  }
  searchAnime(word:any){
    return this.http.get<any[]>(`${this.URL_API}/search/${word}`);
  }
  searchByGender(gender:any, page:any){
    return this.http.get<any[]>(`${this.URL_API}/gender/${gender}?page=${page}`);
  }
  // getFav(){
  //   const res = this.http.get<any[]>(`${this.URL_API}/animes?page=1`).subscribe();


  // }
  parseAnimeData(animes: AnimeI[]):void {
    const currentsFav = this.localSvc.getFavorites();
    const newData = animes.map(anime =>{
      const found = !!currentsFav.find((fav:AnimeI ) => fav.id === anime.id);
      return {...animes, fav: found}
    });
    this.localSvc.animesFavSubject.next(newData);
  }

}