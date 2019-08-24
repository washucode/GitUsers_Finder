import { TestBed } from '@angular/core/testing';

import { GitSearchHttpService } from './git-search-http.service';

describe('GitSearchHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GitSearchHttpService = TestBed.get(GitSearchHttpService);
    expect(service).toBeTruthy();
  });
});
