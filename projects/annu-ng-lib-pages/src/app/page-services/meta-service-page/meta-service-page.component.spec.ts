import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaServicePageComponent } from './meta-service-page.component';

describe('MetaServicePageComponent', () => {
  let component: MetaServicePageComponent;
  let fixture: ComponentFixture<MetaServicePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetaServicePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetaServicePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
