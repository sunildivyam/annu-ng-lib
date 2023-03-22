import { TestBed } from '@angular/core/testing';

import { CategoriesFirebaseHttpService } from './categories-firebase-http.service';

describe('CategoriesFirebaseHttpService', () => {
  let service: CategoriesFirebaseHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriesFirebaseHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
