import { TestBed } from '@angular/core/testing';

import { ArticlesFirebaseHttpService } from './articles-firebase-http.service';

describe('ArticlesFirebaseHttpService', () => {
  let service: ArticlesFirebaseHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticlesFirebaseHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
