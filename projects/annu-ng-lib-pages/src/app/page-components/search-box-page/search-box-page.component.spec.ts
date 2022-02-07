import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBoxPageComponent } from './search-box-page.component';

describe('SearchBoxPageComponent', () => {
  let component: SearchBoxPageComponent;
  let fixture: ComponentFixture<SearchBoxPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBoxPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBoxPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
