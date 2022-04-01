import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveInfoComponent } from './directive-info.component';

describe('DirectiveInfoComponent', () => {
  let component: DirectiveInfoComponent;
  let fixture: ComponentFixture<DirectiveInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectiveInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
