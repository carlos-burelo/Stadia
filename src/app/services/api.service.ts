import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { animeInterface } from '@models/anime.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  URL_API = 'https://carlos-burelo-monoschinos-api.herokuapp.com/api/v1';
  lastest!: Observable<animeInterface[]>; // 
  emision!: Observable<animeInterface[]>;
  anime!: Observable<any[]>;
  animes!: Observable<any[]>;
  episode!: Observable<any[]>;
  genders!: Observable<any[]>;
  gender!: Observable<any[]>;
  search!: Observable<any[]>;

  constructor(public http: HttpClient) { }
  getLastest(){
    this.lastest = this.http.get<animeInterface[]>(`${this.URL_API}/lastest`);
    return this.lastest
  }
  getEmision(page:any){
    this.emision = this.http.get<animeInterface[]>(`${this.URL_API}/emision?page=${page}`);
    return this.emision
  }
  getEpisode(id:any){
    this.episode = this.http.get<any[]>(`${this.URL_API}/episode/${id}`);
    return this.episode
  }
  getAnimes(page?:number){
      this.animes = this.http.get<animeInterface[]>(`${this.URL_API}/animes?page=${page}`);
      return this.animes
  }
  getAnime(id:any){
    this.anime = this.http.get<any[]>(`${this.URL_API}/anime/${id}`);
    return this.anime
  }
  getGenders(){
    this.genders = this.http.get<animeInterface[]>(`${this.URL_API}/genders`);
    return this.genders
  }
  searchAnime(word:any){
    this.search = this.http.get<animeInterface[]>(`${this.URL_API}/search/${word}`);
    return this.search
  }
  searchByGender(gender:any, page:any){
    this.gender = this.http.get<animeInterface[]>(`${this.URL_API}/gender/${gender}?page=${page}`);
    return this.gender
  }


}