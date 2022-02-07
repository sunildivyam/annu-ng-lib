import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceMethodPageComponent } from './service-method-page.component';

describe('ServiceMethodPageComponent', () => {
  let component: ServiceMethodPageComponent;
  let fixture: ComponentFixture<ServiceMethodPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceMethodPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceMethodPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
