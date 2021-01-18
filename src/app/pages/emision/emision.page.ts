import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../../service/anime.service';

@Component({
  selector: 'app-emision',
  templateUrl: './emision.page.html',
  styleUrls: ['./emision.page.scss'],
})
export class EmisionPage implements OnInit {
  public page1:any;
  public page2:any;
  public page3:any;
  constructor(public apiSvc :AnimeService) { }

  ngOnInit() {
    this.getPage1();
    this.getPage2();
    this.getPage3();
  }
  getPage1(){
    this.apiSvc.getEmision(1).subscribe( res => {
      this.page1 = res;
    });
  }
  getPage2(){
    this.apiSvc.getEmision(2).subscribe( res => {
      this.page2 = res;
    });
  }
  getPage3(){
    this.apiSvc.getEmision(3).subscribe( res => {
      this.page3 = res;
    });
  }
}
