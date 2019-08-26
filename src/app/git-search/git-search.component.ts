import { Component, OnInit } from '@angular/core';
import { GitUsers} from '../git-users';
import {UserRepo} from '../user-repo';
import {GitSearchHttpService} from '../git-search-http.service';

@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.css'],
  providers :[GitSearchHttpService],
})
export class GitSearchComponent implements OnInit {
   public searchTerm : string = 'washucode';
  user : GitUsers;
  repo : UserRepo;

  constructor( public searchService:GitSearchHttpService,private searchService2:GitSearchHttpService) { }

  ngOnInit() {
    this.parentGetResult();
  }
  parentGetResult(){
    this.searchService.getUserResult(this.searchTerm).then(
      ()=>{
        this.user = this.searchService.user;
      },
      (error)=>{
         console.log(error);
      })
 
    this.searchService2.getRepos(this.searchTerm).then(
      ()=>{
        this.repo = this.searchService.repo2;
      },
      (error)=>{
        console.log(error);
      }
    )

}
}