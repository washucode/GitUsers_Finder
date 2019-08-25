import { Component, OnInit } from '@angular/core';
import {UserRepo}  from '../user-repo';
import {GitSearchHttpService} from '../git-search-http.service';
 @Component({
  selector: 'app-display-repos',
  templateUrl: './display-repos.component.html',
  styleUrls: ['./display-repos.component.css']
})
export class DisplayReposComponent implements OnInit {
  repo : UserRepo;
  searchTerm : string;
  constructor(public searchService:GitSearchHttpService) { }

  ngOnInit() {
  }
  parentGetResult(searchTerm){
    this.searchService.getRepos(searchTerm).then(
      ()=>{
        this.repo = this.searchService.repo;
      },
      (error)=>{
        console.log(error);
      }
    )
  }

}
