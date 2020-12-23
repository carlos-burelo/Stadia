import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '@services/api.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent implements OnInit {

  public episode:any;
  videourl: any;
  videourlSafe: any;

  constructor(private route: ActivatedRoute, public apiSvc: ApiService, private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.getCapitulo();
  }
  
  getCapitulo(){
    const id = this.route.snapshot.params.id;
    this.apiSvc.getEpisode(id).subscribe((res: any) => {
      this.episode = res;
    });
  }
  getVideo($event:any, video:string){
    console.log(video)
    this.videourl = video;
    this.videourlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.videourl);
  }
}
