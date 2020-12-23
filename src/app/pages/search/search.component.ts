import { Component, OnInit } from '@angular/core';
import { ApiService } from '@services/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public genders : any;
  constructor(public apiSvc: ApiService) { }

  ngOnInit(): void {
    this.getGendersList();
  }
  getGendersList(){
    this.apiSvc.getGenders().subscribe( genders => {
      this.genders = genders;
    });
  }
}