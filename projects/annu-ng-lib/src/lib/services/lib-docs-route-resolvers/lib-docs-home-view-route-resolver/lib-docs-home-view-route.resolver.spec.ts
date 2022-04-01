import { TestBed } from '@angular/core/testing';

import { LibDocsHomeViewRouteResolver } from './lib-docs-home-view-route.resolver';

describe('LibDocsHomeViewRouteResolver', () => {
  let resolver: LibDocsHomeViewRouteResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(LibDocsHomeViewRouteResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
