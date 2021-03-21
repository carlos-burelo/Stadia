import { Component, OnInit } from '@angular/core';
import { AnimeService } from "../../services/anime.service";
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  skeleton = [1,2,3,4,5,6,7,8,9,10]
  anime:any
  
  constructor(public animeSvc: AnimeService, public toastController: ToastController) { }
  ngOnInit() {
    this.getEpisodes();
  }
  getEpisodes(){
    setTimeout(() => {
      this.animeSvc.getLastest().subscribe(res => {
        this.anime = res;
        this.anime = this.anime?.animes;
      })
    }, 1000);
  }
  async refresh(){
    if(this.anime){
      const toast = await this.toastController.create({
        header: 'Lista de animes actualizada',
        animated: true,
        position: 'top',
        color: 'primary',
        mode: 'ios',
        buttons: [
          {
            text: 'Done',
            role: 'cancel'
          }
        ]
      });
      toast.present();
    } else {
      this.getEpisodes();
    }
    
  }
}
