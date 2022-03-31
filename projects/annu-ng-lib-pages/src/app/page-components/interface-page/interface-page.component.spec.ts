import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfacePageComponent } from './interface-page.component';

describe('InterfacePageComponent', () => {
  let component: InterfacePageComponent;
  let fixture: ComponentFixture<InterfacePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterfacePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfacePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
