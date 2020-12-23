import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { animeInterface } from '@models/anime.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  URL_API = 'https://UrlApiService';
  // for performance reasons I can't make the api public, but you can find more 
  // information in this repository [https://github.com/atleugim/monoschinos-api/]
  lastest!: Observable<animeInterface[]>;
  emision!: Observable<animeInterface[]>;
  anime!: Observable<any[]>;
  episode!: Observable<any[]>;
  genders!: Observable<any[]>;

  constructor(public http: HttpClient) { }
  getLastest(){
    this.lastest = this.http.get<animeInterface[]>(`${this.URL_API}/lastest`);
    return this.lastest
  }
  getEmision(){
    this.emision = this.http.get<animeInterface[]>(`${this.URL_API}/emision`);
    return this.emision
  }
  getEpisode(id:any){
    this.episode = this.http.get<any[]>(`${this.URL_API}/episode/${id}`);
    return this.episode
  }
  getAnime(id:any){
    this.anime = this.http.get<any[]>(`${this.URL_API}/anime/${id}`);
    return this.anime
  }
  getGenders(){
    this.genders = this.http.get<animeInterface[]>(`${this.URL_API}/genders`);
    return this.genders
  }
}