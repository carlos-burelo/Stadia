import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  // developer environment, to build the API follow this repository:
  // https://github.com/atleugim/monoschinos-api
  // Original api credits to atleugim
  URL_API = 'https://api-monoschinos.herokuapp.com/api/v1';

  constructor(public http: HttpClient) { }
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


}