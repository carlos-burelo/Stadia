import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../../services/anime.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  rContainer = false;
  word: any
  result: any
  genders: any
  constructor(public apiSvc: AnimeService) { }

  ngOnInit() {
    this.getGender();
  }
  searchAnime($event:any){
    this.rContainer = true;
      this.word = $event.srcElement.value
      this.word = this.word.replace(/ /gi, '+')
      console.log(this.word)
      this.apiSvc.searchAnime(this.word).subscribe((res: any) => {
        this.result = res;
        console.log(this.result)
      });
  }
  getGender(){
    this.apiSvc.getGenders().subscribe( res => {
      this.genders = res;
    });
  }
}
