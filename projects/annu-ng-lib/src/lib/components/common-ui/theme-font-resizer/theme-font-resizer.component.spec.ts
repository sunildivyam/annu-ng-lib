import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeFontResizerComponent } from './theme-font-resizer.component';

describe('ThemeFontResizerComponent', () => {
  let component: ThemeFontResizerComponent;
  let fixture: ComponentFixture<ThemeFontResizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemeFontResizerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemeFontResizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
