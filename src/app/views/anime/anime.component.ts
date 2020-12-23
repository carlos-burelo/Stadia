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
  navigate($event:any, id:string){
    console.log(id)
  }
}
