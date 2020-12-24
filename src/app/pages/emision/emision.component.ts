import { Component, OnInit } from '@angular/core';
import { ApiService } from '@services/api.service';

@Component({
  selector: 'app-emision',
  templateUrl: './emision.component.html',
  styleUrls: ['./emision.component.scss']
})
export class EmisionComponent implements OnInit {
  title = 'Emision';
  emision : any;
  page = 0;
  constructor(public apiSvc: ApiService) { }

  ngOnInit(): void {
    this.getEmision();
  }

  getEmision(){
    this.page = this.page + 1
    this.apiSvc.getEmision(this.page).subscribe(emision => {
      this.emision = emision;
    });
  }
  backPage(){
    this.page = this.page - 1
    this.apiSvc.getEmision(this.page).subscribe(emision => {
      this.emision = emision;
    });
  }
  
}