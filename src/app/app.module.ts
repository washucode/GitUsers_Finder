import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitSearchNavComponent } from './git-search-nav/git-search-nav.component';
import { GitSearchComponent } from './git-search/git-search.component';
import { GitDisplaySearchComponent } from './git-display-search/git-display-search.component';
import { GitSearchFormComponent } from './git-search-form/git-search-form.component';

@NgModule({
  declarations: [
    AppComponent,
    GitSearchNavComponent,
    GitSearchComponent,
    GitDisplaySearchComponent,
    GitSearchFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
