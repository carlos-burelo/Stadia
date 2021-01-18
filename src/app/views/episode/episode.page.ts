import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimeService } from '../../service/anime.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { EpisodeI } from '../../models/episode';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.page.html',
  styleUrls: ['./episode.page.scss'],
})
export class EpisodePage implements OnInit {
  waiting = true;
  videourl = 'https://wwww.google.com';
  videourlSafe: SafeResourceUrl;
  title: any; 
  animeId: any; 
  ep: number; 
  videos: any; 
  downloads: any; 
  episode:EpisodeI; 
  anime:any;
  totalEpisodes:number;
  btn_next = true;
  btn_back = true;
  constructor(
    public apiSvc: AnimeService, 
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer
    ) { }

  ngOnInit() {
    this.getEpisode();
    this.getVideo('https://www.dlf.pt/png/big/12/126718_please-wait-png.png');
  }
  getEpisode(){
    const id = this.route.snapshot.params.id;
    this.apiSvc.getEpisode(id).subscribe((res: any) => {
      this.episode = res;
      this.title = this.episode.title;
      this.animeId = this.episode.animeId;
      this.videos = this.episode.videos;
      this.ep = this.episode.epNumber;
      this.downloads = this.episode.downloads;
      this.apiSvc.getAnime(this.animeId).subscribe((res: any) => {
        this.anime = res;
        this.totalEpisodes = this.anime.anime.episodes.length
      });
    });
  }

  nextButton(ep:any){
    console.clear()
    if(ep == this.totalEpisodes){
      this.btn_next = false;

    }
    if(ep < this.totalEpisodes){
      let newCap = ep + 1
      const animeId = this.route.snapshot.params.id;
      const cut = `-episodio-${ep}`
      let f = animeId.replace(cut, "" )
      let res = `${f}-episodio-${newCap}`
      this.router.navigate(['ver/', res])
    }

  }
  backButton(ep:any){
    console.clear()
    if(ep < 2){
      this.btn_back = false;
      console.log('ya no se puede bajar')
    }
    if(ep > 1){
      let newCap = ep - 1
      const animeId = this.route.snapshot.params.id;
      const cut = `-episodio-${ep}`
      let f = animeId.replace(cut, "" )
      let res = `${f}-episodio-${newCap}`
      this.router.navigate(['ver/', res])
    }
    


  }



  unlock(){
    this.waiting = false;
  }
  getVideo(video?:any){ 
    this.videourl = video;
    this.videourlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.videourl);
    console.clear()
  }
}
