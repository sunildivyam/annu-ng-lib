import { TestBed } from '@angular/core/testing';

import { AuthFirebaseUiService } from './auth-firebase-ui.service';

describe('AuthFirebaseUiService', () => {
  let service: AuthFirebaseUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthFirebaseUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
