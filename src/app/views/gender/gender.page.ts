import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimeService } from '../../services/anime.service';


@Component({
  selector: 'app-gender',
  templateUrl: './gender.page.html',
  styleUrls: ['./gender.page.scss'],
})
export class GenderPage implements OnInit {
  public gender: any
  public page1:any;
  public page2:any;
  public page3:any;
  constructor(public apiSvc :AnimeService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.gender = this.router.snapshot.params.id;
    this.getPage1();
    this.getPage2();
    this.getPage3();
  }
  getPage1(){
    this.apiSvc.searchByGender(this.gender , 1).subscribe( res => {
      this.page1 = res;
    });
  }
  getPage2(){
    this.apiSvc.searchByGender(this.gender, 2).subscribe( res => {
      this.page2 = res;
    });
  }
  getPage3(){
    this.apiSvc.searchByGender(this.gender, 3).subscribe( res => {
      this.page3 = res;
    });
  }

}
