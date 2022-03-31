import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibDocsHomeViewRouteData, LIB_DOCS_ROUTE_RESOLVER_DATA_KEYS, InterceptorInfo } from '@annu/ng-lib';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'anu-interceptor-page',
  templateUrl: './interceptor-page.component.html',
  styleUrls: ['./interceptor-page.component.scss']
})
export class InterceptorPageComponent implements OnInit, OnDestroy {
  interceptorName: string;
  interceptorInfo: InterceptorInfo;
  paramsSubscription: Subscription;
  error: any;

  constructor(private route: ActivatedRoute) {
    this.paramsSubscription = this.route.params.subscribe(params => {
      this.interceptorName = params['interceptorName']
      const homeViewData = { ...this.route.parent.snapshot.data[LIB_DOCS_ROUTE_RESOLVER_DATA_KEYS.LIB_DOCS_HOME_VIEW] } as LibDocsHomeViewRouteData || {};
      if (!homeViewData.libDocsInfoError) {
        const svcs = homeViewData.libDocsInfo?.interceptors || [];
        this.interceptorInfo = svcs.find(svc => svc.name === this.interceptorName);
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
