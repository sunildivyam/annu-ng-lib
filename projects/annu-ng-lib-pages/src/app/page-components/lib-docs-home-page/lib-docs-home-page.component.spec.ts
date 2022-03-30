import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibDocsHomePageComponent } from './lib-docs-home-page.component';

describe('LibDocsHomePageComponent', () => {
  let component: LibDocsHomePageComponent;
  let fixture: ComponentFixture<LibDocsHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibDocsHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibDocsHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
