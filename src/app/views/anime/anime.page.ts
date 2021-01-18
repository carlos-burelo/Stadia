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
    this.getCapitulo();
  }
  getCapitulo(){
    const id = this.route.snapshot.params.id;
    this.apiSvc.getAnime(id).subscribe((res: any) => {
      this.anime = res;
    });
  }

}
