import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemePickerPageComponent } from './theme-picker-page.component';

describe('ThemePickerPageComponent', () => {
  let component: ThemePickerPageComponent;
  let fixture: ComponentFixture<ThemePickerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemePickerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemePickerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
