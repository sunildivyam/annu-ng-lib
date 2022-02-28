import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSelectBoxPageComponent } from './multi-select-box-page.component';

describe('MultiSelectBoxPageComponent', () => {
  let component: MultiSelectBoxPageComponent;
  let fixture: ComponentFixture<MultiSelectBoxPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiSelectBoxPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiSelectBoxPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
