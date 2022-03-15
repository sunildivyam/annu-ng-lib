import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideNavItemComponent } from './aside-nav-item.component';

describe('AsideNavItemComponent', () => {
  let component: AsideNavItemComponent;
  let fixture: ComponentFixture<AsideNavItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsideNavItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideNavItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
