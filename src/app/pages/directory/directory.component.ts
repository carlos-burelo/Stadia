import { Component, OnInit } from '@angular/core';
import { ApiService } from '@services/api.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})
export class DirectoryComponent implements OnInit {
  title = 'Directory';
  animes : any;
  npage = 0
  constructor(public apiSvc: ApiService) { }

  ngOnInit(): void {
    this.getAnimesPerPage();
  }
  getAnimesPerPage(){
    this.npage = this.npage+1;
    console.log('Page',this.npage)
    this.apiSvc.getAnimes(this.npage).subscribe((res: any) => {
      this.animes = res;
    });
  }
  backPage(){
    this.npage = this.npage-1;
    this.apiSvc.getAnimes(this.npage).subscribe((res: any) => {
      this.animes = res;
      console.log('resultados de la pagina' + this.npage + this.animes)
    });
  } 
  // getAnimesPerPages(page?:number){

  //   this.apiSvc.getAnimes().subscribe(animes => {
  //     this.animes = animes;
  //     console.log(animes)
  //   });
  // }
}