import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../../service/anime.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.page.html',
  styleUrls: ['./directory.page.scss'],
})
export class DirectoryPage implements OnInit {
  public emision:any; public movies:any; public ovas:any; public anime:any;
  page = 0;
  loading:any
  constructor(public apiSvc: AnimeService, public loadingController: LoadingController) { }

  ngOnInit(): void {
    this.presentLoading('Getting data');
    this.getOvas();
    this.getLastest();
    this.getMovies();
    this.getAnimes();
    
  }
  getLastest(){
    this.page = this.page + 1
    this.apiSvc.getEmision(this.page).subscribe( res => {
      this.emision = res;
    });
  }
  getMovies(){
    const page = 1
    const category = 'pelicula'
    this.apiSvc.getCategory(category ,this.page).subscribe( res => {
      this.movies = res;
    });
  }
  getOvas(){
    const page = 1
    const category = 'ova'
    this.apiSvc.getCategory(category , page).subscribe( res => {
      this.ovas = res;
    });
  }
  getAnimes(){
    const page = 1
    const category = 'anime'
    this.apiSvc.getCategory(category , page).subscribe( res => {
      this.anime = res;
    });
  }
  async presentLoading(message:string) {
    
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message,
      duration: 1500
    });
    return  await loading.present();
    const { role, data } = await loading.onDidDismiss();
  }


}