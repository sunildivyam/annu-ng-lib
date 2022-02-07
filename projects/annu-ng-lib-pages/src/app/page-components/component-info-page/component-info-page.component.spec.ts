import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentInfoPageComponent } from './component-info-page.component';

describe('ComponentInfoPageComponent', () => {
  let component: ComponentInfoPageComponent;
  let fixture: ComponentFixture<ComponentInfoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentInfoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
