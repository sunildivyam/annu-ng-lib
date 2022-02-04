import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilsServicePageComponent } from './utils-service-page.component';

describe('UtilsServicePageComponent', () => {
  let component: UtilsServicePageComponent;
  let fixture: ComponentFixture<UtilsServicePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilsServicePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilsServicePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
