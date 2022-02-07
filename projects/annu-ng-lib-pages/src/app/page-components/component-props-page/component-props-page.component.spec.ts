import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentPropsPageComponent } from './component-props-page.component';

describe('ComponentPropsPageComponent', () => {
  let component: ComponentPropsPageComponent;
  let fixture: ComponentFixture<ComponentPropsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentPropsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentPropsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
