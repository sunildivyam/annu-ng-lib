import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideNavHeaderComponent } from './aside-nav-header.component';

describe('AsideNavHeaderComponent', () => {
  let component: AsideNavHeaderComponent;
  let fixture: ComponentFixture<AsideNavHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsideNavHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideNavHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
