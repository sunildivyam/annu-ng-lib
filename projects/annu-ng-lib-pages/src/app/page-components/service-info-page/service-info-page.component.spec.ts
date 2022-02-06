import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceInfoPageComponent } from './service-info-page.component';

describe('ServiceInfoPageComponent', () => {
  let component: ServiceInfoPageComponent;
  let fixture: ComponentFixture<ServiceInfoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceInfoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
