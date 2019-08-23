import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitDisplaySearchComponent } from './git-display-search.component';

describe('GitDisplaySearchComponent', () => {
  let component: GitDisplaySearchComponent;
  let fixture: ComponentFixture<GitDisplaySearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitDisplaySearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitDisplaySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
