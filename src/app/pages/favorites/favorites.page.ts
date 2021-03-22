import { Component, OnInit } from '@angular/core';
import { AnimeI } from 'src/app/models/anime';
import { LocalStorageService } from 'src/app/services/localStorage.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  constructor(public localStorageSvc: LocalStorageService) { 
    
  }
  local:AnimeI[];

  ngOnInit() {
    this.local = JSON.parse(localStorage.getItem('favorites'));
    this.local = JSON.parse(localStorage.getItem('favorites'));
  }
  refresh(){
    this.ngOnInit()
  }
}
