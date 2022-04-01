import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterceptorPageComponent } from './interceptor-page.component';

describe('InterceptorPageComponent', () => {
  let component: InterceptorPageComponent;
  let fixture: ComponentFixture<InterceptorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterceptorPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterceptorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
