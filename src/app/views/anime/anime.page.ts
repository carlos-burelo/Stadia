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

  slideOpts = {
    slidesPerView: 5,
    // initialSlide: 1,
    speed: 400
  };
  constructor( 
    public apiSvc: AnimeService, 
    public db: LocalStorageService, 
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.getAnime();
  }
  getAnime(){
    const id = this.route.snapshot.params.id;
    this.apiSvc.getAnime(id).subscribe((res: any) => {
      this.anime = res;
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
  addToFavorite(anime:any){
    // this.db.addToFav(anime);
  }
}
