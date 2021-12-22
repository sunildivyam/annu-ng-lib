import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterNavPageComponent } from './footer-nav-page.component';

describe('FooterNavPageComponent', () => {
  let component: FooterNavPageComponent;
  let fixture: ComponentFixture<FooterNavPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterNavPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterNavPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
