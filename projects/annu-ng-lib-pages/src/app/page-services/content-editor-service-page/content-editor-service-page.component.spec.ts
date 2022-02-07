import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentEditorServicePageComponent } from './content-editor-service-page.component';

describe('ContentEditorServicePageComponent', () => {
  let component: ContentEditorServicePageComponent;
  let fixture: ComponentFixture<ContentEditorServicePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentEditorServicePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentEditorServicePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
