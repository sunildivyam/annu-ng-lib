import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionServicePageComponent } from './selection-service-page.component';

describe('SelectionServicePageComponent', () => {
  let component: SelectionServicePageComponent;
  let fixture: ComponentFixture<SelectionServicePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectionServicePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionServicePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
