import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DirectiveInfo, LibDocsHomeViewRouteData, LIB_DOCS_ROUTE_RESOLVER_DATA_KEYS } from '@annu/ng-lib';
import { Subscription } from 'rxjs';

@Component({
  selector: 'anu-directive-page',
  templateUrl: './directive-page.component.html',
  styleUrls: ['./directive-page.component.scss']
})
export class DirectivePageComponent implements OnInit, OnDestroy {
  directiveName: string;
  directiveInfo: DirectiveInfo;
  paramsSubscription: Subscription;
  error: any;

  constructor(private route: ActivatedRoute) {
    this.paramsSubscription = this.route.params.subscribe(params => {
      this.directiveName = params['directiveName']
      const homeViewData = { ...this.route.parent.snapshot.data[LIB_DOCS_ROUTE_RESOLVER_DATA_KEYS.LIB_DOCS_HOME_VIEW] } as LibDocsHomeViewRouteData || {};
      if (!homeViewData.libDocsInfoError) {
        const cmps = homeViewData.libDocsInfo?.directives || [];
        this.directiveInfo = cmps.find(cmp => cmp.name === this.directiveName);
      }

      this.error = homeViewData?.libDocsInfoError;
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }
}
