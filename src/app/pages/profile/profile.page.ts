import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor( public http: HttpClient) { }
  req = 'https://carlos-burelo.github.io/Stadia/assets/pubic.json';
  data:any
  ngOnInit() {
  }
  getData(){
   this.data = this.http.get<any[]>(`${this.req}`);
  }
}
