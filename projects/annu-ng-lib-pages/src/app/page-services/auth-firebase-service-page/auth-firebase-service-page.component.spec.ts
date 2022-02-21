import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthFirebaseServicePageComponent } from './auth-firebase-service-page.component';

describe('AuthFirebaseServicePageComponent', () => {
  let component: AuthFirebaseServicePageComponent;
  let fixture: ComponentFixture<AuthFirebaseServicePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthFirebaseServicePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthFirebaseServicePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
