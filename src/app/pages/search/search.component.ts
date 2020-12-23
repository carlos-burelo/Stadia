import { Component, OnInit } from '@angular/core';
import { ApiService } from '@services/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  title = 'Search';
  gender_container = true
  searchByGender_container = false

  genders_response : any;
  searchName_response:any;
  searchGender_response:any;
  gender_page = 0;
  gender:any;
  word:any



  constructor(public apiSvc: ApiService) { }
  public searchForm = new FormGroup({
    name: new FormControl('', Validators.required)
  });
  ngOnInit(): void {
    this.getGendersList();
  }
  searchAnime(word_search:any){
    this.gender_container = false
     this.word = word_search.name
     this.word = this.word.replace(/ /gi, '+')
     this.apiSvc.searchAnime(this.word).subscribe((res: any) => {
      this.searchName_response = res;
    });
  }
  searchbyGender($event:any ,gender:any ){
      this.gender_container = false
      this.searchByGender_container = true
      this.gender = gender.id
      this.gender_page = this.gender_page +1
      this.apiSvc.searchByGender(this.gender, this.gender_page).subscribe((res: any) => {
      this.searchGender_response = res;
    });
  }
  nextPage(){
      this.gender_page = this.gender_page + 1;
      this.apiSvc.searchByGender(this.gender, this.gender_page).subscribe((res: any) => {
      this.searchGender_response = res;
    });
  }
  backPage(){
    this.gender_page = this.gender_page - 1;
    this.apiSvc.searchByGender(this.gender, this.gender_page).subscribe((res: any) => {
    this.searchGender_response = res;
  });
}
  getGendersList(){
    this.apiSvc.getGenders().subscribe( genders => {
      this.genders_response = genders;
    });
  }
}