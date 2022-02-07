import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsServicePageComponent } from './docs-service-page.component';

describe('DocsServicePageComponent', () => {
  let component: DocsServicePageComponent;
  let fixture: ComponentFixture<DocsServicePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocsServicePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocsServicePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
