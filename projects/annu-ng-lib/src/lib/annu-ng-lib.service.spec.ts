import { TestBed } from '@angular/core/testing';

import { AnnuNgLibService } from './annu-ng-lib.service';

describe('AnnuNgLibService', () => {
  let service: AnnuNgLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnnuNgLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
