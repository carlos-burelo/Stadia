import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '@services/api.service';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.scss']
})
export class AnimeComponent implements OnInit {

  public anime:any;
  Episode: boolean = false;
  Info: boolean = true;
  info_container = true;
  episode_container = false;

  constructor(private route: ActivatedRoute, public apiSvc: ApiService, router: Router) { }

  ngOnInit(): void {
    this.getCapitulo();
  }
  getCapitulo(){
    const id = this.route.snapshot.params.id;
    this.apiSvc.getAnime(id).subscribe((res: any) => {
      this.anime = res;
    });
  }

  showInfo(){
    this.Info = true;
    this.Episode = false;
    this.info_container = true;
    this.episode_container = false;
  }
  showEp(){
    this.Info = false;
    this.Episode = true;
    this.info_container = false;
    this.episode_container = true;
  }
  getEpisodeById(id:any){
    console.log(id)
  }
}
