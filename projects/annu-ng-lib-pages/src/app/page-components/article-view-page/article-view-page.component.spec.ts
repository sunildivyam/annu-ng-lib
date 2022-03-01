import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleViewPageComponent } from './article-view-page.component';

describe('ArticleViewPageComponent', () => {
  let component: ArticleViewPageComponent;
  let fixture: ComponentFixture<ArticleViewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleViewPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
