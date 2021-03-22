import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimeService } from '../../services/anime.service';
import { LocalStorageService } from '../../services/localStorage.service';
import { AnimeI } from '../../models/anime';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.page.html',
  styleUrls: ['./anime.page.scss'],
})
export class AnimePage implements OnInit {
  anime: AnimeI;
  fav = false
  favorite: any;
  favoriteString: boolean = false;
  segmentModel = "informacion";

  constructor( 
    public apiSvc: AnimeService, 
    public localStorageSvc: LocalStorageService, 
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.getAnime();
    // this.checkFav()
  }
  getAnime(){
    const id = this.route.snapshot.params.id;
    this.apiSvc.getAnime(id).subscribe((res: any) => {
      this.anime = res;
      this.checkFav(this.anime.id)
    });
  }
  doRefresh(event){
    setTimeout(() => {
      this.getAnime();
      event.target.complete();
    }, 1000);
  }
  segmentChanged(event){
    console.log(this.segmentModel);
    
    console.log(event);
  }

  checkFav(id:any){
    const fav = JSON.parse(localStorage.getItem('favorites'));
    const found = fav.find(i => i.id === id);
    this.fav = found?.fav
  }

  toggleFavorite():void{
    const fav = this.anime.fav;
    this.anime.fav = !fav;
    this.localStorageSvc.addOrRemove(this.anime);
    this.getAnime()
  }
}
