import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryEditorPageComponent } from './category-editor-page.component';

describe('CategoryEditorPageComponent', () => {
  let component: CategoryEditorPageComponent;
  let fixture: ComponentFixture<CategoryEditorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryEditorPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryEditorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
