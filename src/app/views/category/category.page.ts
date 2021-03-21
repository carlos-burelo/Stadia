import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimeService } from '../../services/anime.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  public category: any
  public page1:any;
  public page2:any;
  public page3:any;
  constructor(public apiSvc :AnimeService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.category = this.router.snapshot.params.id;
    this.getPage1();
    this.getPage2();
    this.getPage3();
  }

  getPage1(){
    this.apiSvc.getCategory(this.category , 1).subscribe( res => {
      this.page1 = res;
    });
  }
  getPage2(){
    this.apiSvc.getCategory(this.category, 2).subscribe( res => {
      this.page2 = res;
    });
  }
  getPage3(){
    this.apiSvc.getCategory(this.category, 3).subscribe( res => {
      this.page3 = res;
    });
  }

}
