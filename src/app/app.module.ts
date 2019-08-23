import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitSearchNavComponent } from './git-search-nav/git-search-nav.component';
import { GitSearchComponent } from './git-search/git-search.component';

@NgModule({
  declarations: [
    AppComponent,
    GitSearchNavComponent,
    GitSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
