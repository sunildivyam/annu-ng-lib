import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterceptorInfoComponent } from './interceptor-info.component';

describe('InterceptorInfoComponent', () => {
  let component: InterceptorInfoComponent;
  let fixture: ComponentFixture<InterceptorInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterceptorInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterceptorInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
