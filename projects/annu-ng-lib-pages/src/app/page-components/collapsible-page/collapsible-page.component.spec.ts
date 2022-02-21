import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsiblePageComponent } from './collapsible-page.component';

describe('CollapsiblePageComponent', () => {
  let component: CollapsiblePageComponent;
  let fixture: ComponentFixture<CollapsiblePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollapsiblePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapsiblePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
