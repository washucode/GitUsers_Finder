import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitSearchNavComponent } from './git-search-nav.component';

describe('GitSearchNavComponent', () => {
  let component: GitSearchNavComponent;
  let fixture: ComponentFixture<GitSearchNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitSearchNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitSearchNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
