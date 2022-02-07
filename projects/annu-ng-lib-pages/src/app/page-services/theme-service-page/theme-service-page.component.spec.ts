import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeServicePageComponent } from './theme-service-page.component';

describe('ThemeServicePageComponent', () => {
  let component: ThemeServicePageComponent;
  let fixture: ComponentFixture<ThemeServicePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemeServicePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeServicePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
