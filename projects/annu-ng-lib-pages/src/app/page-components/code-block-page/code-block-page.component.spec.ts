import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeBlockPageComponent } from './code-block-page.component';

describe('CodeBlockPageComponent', () => {
  let component: CodeBlockPageComponent;
  let fixture: ComponentFixture<CodeBlockPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeBlockPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeBlockPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
