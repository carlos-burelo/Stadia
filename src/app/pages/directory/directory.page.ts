import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../../services/anime.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.page.html',
  styleUrls: ['./directory.page.scss'],
})
export class DirectoryPage implements OnInit {
  public emision:any; public movies:any; public ovas:any; public anime:any;
  page = 0;
  constructor(public apiSvc: AnimeService) { }

  ngOnInit(): void {
    this.getOvas();
    this.getEmision();
    this.getMovies();
    this.getAnimes();
  }
  getEmision(){
    this.page = this.page + 1
    this.apiSvc.getEmision(this.page).subscribe( res => {
      this.emision = res;
    });
  }
  getMovies(){
    const page = 1
    const category = 'pelicula'
    this.apiSvc.getCategory(category , page).subscribe( res => {
      this.movies = res;
    });
  }
  getOvas(){
    const page = 1
    const category = 'ova'
    this.apiSvc.getCategory(category , page).subscribe( res => {
      this.ovas = res;
    });
  }
  getAnimes(){
    const page = 1
    const category = 'anime'
    this.apiSvc.getCategory(category , page).subscribe( res => {
      this.anime = res;
    });
  }
  doRefresh(event){
    setTimeout(() => {
      this.ngOnInit();
      event.target.complete();
    });
    
  }

}