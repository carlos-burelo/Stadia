import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../../service/anime.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public lastest : any;
  constructor(public apiSvc: AnimeService) { }
  ngOnInit(): void {
    this.getLastest();
  }
  getLastest(){
    this.apiSvc.getLastest().subscribe( lastest => {
      this.lastest = lastest;
    });
  }
  doRefresh(event){
    setTimeout(() => {
      this.getLastest()
      event.target.complete();
    });
    
  }
}
