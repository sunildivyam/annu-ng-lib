import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentEditorPageComponent } from './content-editor-page.component';

describe('ContentEditorPageComponent', () => {
  let component: ContentEditorPageComponent;
  let fixture: ComponentFixture<ContentEditorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentEditorPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentEditorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
