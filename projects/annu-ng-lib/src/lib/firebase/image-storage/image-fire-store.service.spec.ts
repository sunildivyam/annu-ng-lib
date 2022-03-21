import { TestBed } from '@angular/core/testing';

import { ImageFireStoreService } from './image-fire-store.service';

describe('ImageFireStoreService', () => {
  let service: ImageFireStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageFireStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
