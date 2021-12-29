import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentPropsComponent } from './component-props.component';

describe('ComponentPropsComponent', () => {
  let component: ComponentPropsComponent;
  let fixture: ComponentFixture<ComponentPropsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentPropsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentPropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
