import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginGenericComponent } from './login-generic.component';

describe('LoginGenericComponent', () => {
  let component: LoginGenericComponent;
  let fixture: ComponentFixture<LoginGenericComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginGenericComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginGenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
