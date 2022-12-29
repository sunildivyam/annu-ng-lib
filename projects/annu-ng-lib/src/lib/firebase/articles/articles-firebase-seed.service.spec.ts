import { TestBed } from '@angular/core/testing';

import { ArticlesFirebaseSeedService } from './articles-firebase-seed.service';

describe('ArticlesFirebaseSeedService', () => {
  let service: ArticlesFirebaseSeedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticlesFirebaseSeedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
