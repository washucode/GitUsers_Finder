import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {GitUsers} from './git-users';
import {UserRepo} from './user-repo';
import { environment } from './../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class GitSearchHttpService {
  user : GitUsers;
  repo : UserRepo;
  getrepo : any;
 
  constructor(private http : HttpClient) {
    this.user = new GitUsers("","","","",0,0,0,new Date());
    this.repo = new UserRepo('','','',new Date())
   }

  getUserResult(searchTerm:string){
    interface UserResult{
      name:string;
   login : string;
      avatar_url:string;
      html_url : string;
      public_repos:0;
      followers:0;
      following:0;
      created_at : Date;
    }
    let promise = new Promise ((resolve,reject)=>{
      this.http.get<UserResult>('https://api.github.com/users/'+searchTerm+'?access_token='+environment.gitApi).toPromise().then(
        (result)=>{
           this.user = new GitUsers(result.name,result.login,result.avatar_url,result.html_url,result.public_repos,result.followers,result.following,result.created_at)
           resolve()
           console.log(result);
        },(error)=>{
          console.log(error);
          reject(error);
        })
    })
    return promise
  }
  getRepos(searchTerm:string){
    interface RepoResult{
       name:string;
      html_url:string;
       description:string;
      created_at: Date;
    }
    let myPromise = new Promise((resolve,reject)=>{
      this.http.get<RepoResult>("https://api.github.com/users/"+searchTerm+"/repos?order=created&sort=asc?access_token="+environment.gitApi).toPromise().then(
        (repoResult)=>{
        this.getrepo = repoResult;
        console.log(repoResult);
        resolve()
      },error=>{
        reject(error);
      })
    })
    return myPromise;
 }

 getOtherRepos(searchTerm:string){
  interface RepoResult{
    name:string;
    html_url:string;
    description:string;
    created_at: Date;
  }
  let myPromise = new Promise((resolve,reject)=>{
    this.http.get<RepoResult>("https://api.github.com/search/repositories?q="+searchTerm+environment.gitApi).toPromise().then(
      (repoResult)=>{
      this.getrepo = repoResult;
      console.log(repoResult);
      resolve()
    },error=>{
      reject(error);
    })
  })
  return myPromise;
}
 

}
