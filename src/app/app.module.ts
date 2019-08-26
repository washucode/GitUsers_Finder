import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitSearchNavComponent } from './git-search-nav/git-search-nav.component';
import { GitSearchComponent } from './git-search/git-search.component';
import { GitDisplaySearchComponent } from './git-display-search/git-display-search.component';
import { GitSearchFormComponent } from './git-search-form/git-search-form.component';
import {HttpClientModule } from '@angular/common/http';
import {HttpClient } from '@angular/common/http';
import {GitSearchHttpService} from './git-search-http.service';
import { DisplayReposComponent } from './display-repos/display-repos.component';
import { HighlightDirective } from './highlight.directive';
@NgModule({
  declarations: [
    AppComponent,
    GitSearchNavComponent,
    GitSearchComponent,
    GitDisplaySearchComponent,
    GitSearchFormComponent,
    DisplayReposComponent,
    HighlightDirective,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [GitSearchHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
