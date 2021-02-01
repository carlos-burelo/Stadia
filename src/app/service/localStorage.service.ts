import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
   fav:any;
    constructor() { }
  
  
    public addToFav(anime:any){
        localStorage.setItem('favorites', JSON.stringify(anime));
        let favs = JSON.parse(localStorage.getItem('favorites'));
        console.log(favs)
    }
}