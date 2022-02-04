import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightServicePageComponent } from './highlight-service-page.component';

describe('HighlightServicePageComponent', () => {
  let component: HighlightServicePageComponent;
  let fixture: ComponentFixture<HighlightServicePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighlightServicePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighlightServicePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
