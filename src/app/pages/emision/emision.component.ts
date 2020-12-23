import { Component, OnInit } from '@angular/core';
import { ApiService } from '@services/api.service';

@Component({
  selector: 'app-emision',
  templateUrl: './emision.component.html',
  styleUrls: ['./emision.component.scss']
})
export class EmisionComponent implements OnInit {
  title = 'Emision';
  public emision : any;
  constructor(public apiSvc: ApiService) { }

  ngOnInit(): void {
    this.getEmision();
  }

  getEmision(){
    this.apiSvc.getEmision().subscribe(emision => {
      this.emision = emision;
    });
  }
}