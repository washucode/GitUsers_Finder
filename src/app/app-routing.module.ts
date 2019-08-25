import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GitSearchComponent } from './git-search/git-search.component';
import { GitDisplaySearchComponent }from './git-display-search/git-display-search.component';
import { DisplayReposComponent} from './display-repos/display-repos.component';

const routes: Routes = [
  {path:'home', component:GitSearchComponent},
  {path:'display_results', component:GitDisplaySearchComponent},
  {path:'displayRepos', component:DisplayReposComponent},
  {'pathMatch':'full','redirectTo':'home','path':''},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
