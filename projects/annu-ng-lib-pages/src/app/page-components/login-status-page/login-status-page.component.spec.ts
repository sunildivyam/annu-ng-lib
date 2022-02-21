import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginStatusPageComponent } from './login-status-page.component';

describe('LoginStatusPageComponent', () => {
  let component: LoginStatusPageComponent;
  let fixture: ComponentFixture<LoginStatusPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginStatusPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginStatusPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
