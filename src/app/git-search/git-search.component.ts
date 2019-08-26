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

  constructor( public getMyUser:GitSearchHttpService,private getMyRepo:GitSearchHttpService) { }

  ngOnInit() {
    this.parentGetResult();
  }
  parentGetResult(){
    this.getMyUser.getUserResult(this.searchTerm).then(
      ()=>{
        this.user = this.getMyUser.user;
      },
      (error)=>{
         console.log(error);
      })
 
    this. getMyRepo.getRepos(this.searchTerm).then(
      ()=>{
        this.repo = this. getMyRepo.repo;
      },
      (error)=>{
        console.log(error);
      }
    )

}
}