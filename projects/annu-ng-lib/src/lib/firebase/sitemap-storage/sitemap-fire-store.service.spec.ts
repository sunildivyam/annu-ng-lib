import { TestBed } from '@angular/core/testing';

import { SitemapFireStoreService } from './sitemap-fire-store.service';

describe('ImageFireStoreService', () => {
  let service: SitemapFireStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SitemapFireStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
