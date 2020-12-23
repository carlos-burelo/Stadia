import { Component, OnInit } from '@angular/core';
import { ApiService } from '@services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Home';
  public lastest : any;
  constructor(public apiSvc: ApiService) { }
  ngOnInit(): void {
    this.getLastest();
  }
  getLastest(){
    this.apiSvc.getLastest().subscribe( lastest => {
      this.lastest = lastest;
    });
  }
}
