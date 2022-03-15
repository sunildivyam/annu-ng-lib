import { TestBed } from '@angular/core/testing';

import { HomeViewRouteResolver } from './home-view-route.resolver';

describe('HomeViewRouteResolver', () => {
  let resolver: HomeViewRouteResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(HomeViewRouteResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
