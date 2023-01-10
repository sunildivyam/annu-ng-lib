import { TestBed } from '@angular/core/testing';

import { ArticlesFirebaseHttpQueryService } from './articles-firebase-http-query.service';

describe('ArticlesFirebaseHttpQueryService', () => {
  let service: ArticlesFirebaseHttpQueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticlesFirebaseHttpQueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
