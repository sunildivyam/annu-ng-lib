import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesFirebaseServicePageComponent } from './articles-firebase-service-page.component';

describe('ArticlesFirebaseServicePageComponent', () => {
  let component: ArticlesFirebaseServicePageComponent;
  let fixture: ComponentFixture<ArticlesFirebaseServicePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlesFirebaseServicePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesFirebaseServicePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
