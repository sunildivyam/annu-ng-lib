import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardInfoComponent } from './guard-info.component';

describe('GuardInfoComponent', () => {
  let component: GuardInfoComponent;
  let fixture: ComponentFixture<GuardInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuardInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
