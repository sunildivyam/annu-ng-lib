import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceMethodComponent } from './service-method.component';

describe('ServiceMethodComponent', () => {
  let component: ServiceMethodComponent;
  let fixture: ComponentFixture<ServiceMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceMethodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
