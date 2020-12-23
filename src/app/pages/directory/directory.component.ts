import { Component, OnInit } from '@angular/core';
import { ApiService } from '@services/api.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})
export class DirectoryComponent implements OnInit {
  title = 'Directory';
  public animes : any;
  constructor(public apiSvc: ApiService) { }

  ngOnInit(): void {
    this.getEmision();
  }

  getEmision(){
    this.apiSvc.getEmision().subscribe(animes => {
      this.animes = animes;
    });
  }
}