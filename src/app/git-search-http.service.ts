import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {GitUsers} from './git-users';
import { environment } from './../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class GitSearchHttpService {
  user : GitUsers;
  constructor(private http : HttpClient) { }

  getUserResult(searchTerm:string){
    interface UserResult{
      name:string;
      username : string
      profilepicUrl:string;
      accountUrl : string;
      numberRepos:string;
      followers:0;
      following:0;
      created_at : Date;
    }
    let promise = new Promise ((resolve,reject)=>{
      this.http.get<UserResult>('https://api.github.com/users/'+searchTerm+'?access_token='+environment.gitApi).toPromise().then(
        (result)=>{
           this.user = new GitUsers(result.name,result.username,result.profilepicUrl,result.accountUrl,result.numberRepos,result.followers,result.following,result.created_at)
           resolve()
           console.log(result);
        },(error)=>{
          console.log(error);
          reject(error);
        })
    })
    return promise
  }
 }
 
  

