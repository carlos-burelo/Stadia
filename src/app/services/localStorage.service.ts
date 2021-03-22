import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AnimeI } from '../models/anime';
const FAVORITES = 'favorites'
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  animesFavSubject = new BehaviorSubject<any[]>(null);
  animesFavt$ = this.animesFavSubject.asObservable() 
  constructor() { 
    this.initLocalStorage();
  }
  private initLocalStorage():void{
    const currents = JSON.parse(localStorage.getItem(FAVORITES));
    if(!currents){
      localStorage.setItem(FAVORITES, JSON.stringify([]))
    }
    this.getFavorites()
  }

  addOrRemove(anime:AnimeI):void{
    const {id} = anime;
    const currentsFav = this.getFavorites();
    const found = !!currentsFav.find( (fav: AnimeI ) => fav.id === id );
    found ? this.removeFav(id) : this.addFav(anime)

  }
    
  removeFav(id: string):void{
    try {
      const currentsFav = this.getFavorites();
      const animes = currentsFav.filter(item => item.id !== id);
      localStorage.setItem(FAVORITES, JSON.stringify([...animes]));
      this.animesFavSubject.next([...animes]);


    } catch (e) {
      console.log('error en el service', e)
      
    }
  }

  addFav(anime: AnimeI):void{
    try {
      const currentsFav = this.getFavorites();
      localStorage.setItem(FAVORITES, JSON.stringify([...currentsFav, anime]));
      this.animesFavSubject.next([...currentsFav, anime]);

    } catch (e) {
      console.log('error en el service', e)
    }
  }

  getFavorites():any{
    try {
      const favorites = JSON.parse(localStorage.getItem(FAVORITES));
      this.animesFavSubject.next(favorites);
      return favorites
    } catch (e) {
      console.log('error en el service', e)
    }
  }
  clearLocalStorage():void{
    localStorage.clear();
  }


}