import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemePreviewPageComponent } from './theme-preview-page.component';

describe('ThemePreviewPageComponent', () => {
  let component: ThemePreviewPageComponent;
  let fixture: ComponentFixture<ThemePreviewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemePreviewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemePreviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
