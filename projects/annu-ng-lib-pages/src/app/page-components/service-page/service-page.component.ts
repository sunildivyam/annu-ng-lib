import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibDocsHomeViewRouteData, LIB_DOCS_ROUTE_RESOLVER_DATA_KEYS, ServiceInfo } from '@annu/ng-lib';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'anu-service-page',
  templateUrl: './service-page.component.html',
  styleUrls: ['./service-page.component.scss']
})
export class ServicePageComponent implements OnInit, OnDestroy {
  serviceName: string;
  serviceInfo: ServiceInfo;
  paramsSubscription: Subscription;
  error: any;

  constructor(private route: ActivatedRoute) {
    this.paramsSubscription = this.route.params.subscribe(params => {
      this.serviceName = params['serviceName']
      const homeViewData = { ...this.route.parent.snapshot.data[LIB_DOCS_ROUTE_RESOLVER_DATA_KEYS.LIB_DOCS_HOME_VIEW] } as LibDocsHomeViewRouteData || {};
      if (!homeViewData.libDocsInfoError) {
        const svcs = homeViewData.libDocsInfo?.services || [];
        this.serviceInfo = svcs.find(svc => svc.name === this.serviceName);
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
