import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-git-search-form',
  templateUrl: './git-search-form.component.html',
  styleUrls: ['./git-search-form.component.css']
})
export class GitSearchFormComponent implements OnInit {
  searchTerm:string;
  @Output () emitResult= new EventEmitter<any>(); 
  getResult(){
      this.emitResult.emit(this.searchTerm);
  }
  constructor() { }

  ngOnInit() {
  }

}
