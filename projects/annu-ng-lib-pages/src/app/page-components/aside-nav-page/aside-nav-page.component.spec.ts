import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideNavPageComponent } from './aside-nav-page.component';

describe('AsideNavPageComponent', () => {
  let component: AsideNavPageComponent;
  let fixture: ComponentFixture<AsideNavPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsideNavPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideNavPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
