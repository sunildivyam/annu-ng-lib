import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryArticlesListPageComponent } from './category-articles-list-page.component';

describe('CategoryArticlesListPageComponent', () => {
  let component: CategoryArticlesListPageComponent;
  let fixture: ComponentFixture<CategoryArticlesListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryArticlesListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryArticlesListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
