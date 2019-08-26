import { Component, OnInit } from '@angular/core';
import {GitUsers} from '../git-users';
import {GitSearchHttpService} from '../git-search-http.service';
import {UserRepo} from '../user-repo';

@Component({
  selector: 'app-git-display-search',
  templateUrl: './git-display-search.component.html',
  styleUrls: ['./git-display-search.component.css']
})
export class GitDisplaySearchComponent implements OnInit {
  user : GitUsers;
  repo : any;
  searchTerm : string;
  
  constructor(public searchService:GitSearchHttpService, private searchService2:GitSearchHttpService) { }
  
  ngOnInit() {
  }
  parentGetResult(searchTerm){
   this.searchService.getUserResult(searchTerm).then(
     ()=>{
       this.user = this.searchService.user;
     },
     (error)=>{
        console.log(error);
     })

   this.searchService2.getRepos(searchTerm).then(
     ()=>{
       this.repo = this.searchService2.repo;
     },
     (error)=>{
       console.log(error);
     }
   )
  }


}
