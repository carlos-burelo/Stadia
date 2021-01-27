import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimeService } from '../../service/anime.service';
import { AnimeI } from '../../models/anime';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.page.html',
  styleUrls: ['./anime.page.scss'],
})
export class AnimePage implements OnInit {
  anime: AnimeI;
  constructor( public apiSvc: AnimeService, private route: ActivatedRoute) { }

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

}
