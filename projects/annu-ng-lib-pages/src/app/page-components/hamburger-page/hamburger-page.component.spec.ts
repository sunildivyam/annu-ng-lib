import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HamburgerPageComponent } from './hamburger-page.component';

describe('HamburgerPageComponent', () => {
  let component: HamburgerPageComponent;
  let fixture: ComponentFixture<HamburgerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HamburgerPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HamburgerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
