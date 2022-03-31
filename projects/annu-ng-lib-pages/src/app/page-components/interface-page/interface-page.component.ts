import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibDocsHomeViewRouteData, LIB_DOCS_ROUTE_RESOLVER_DATA_KEYS, InterfaceInfo } from '@annu/ng-lib';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'anu-interface-page',
  templateUrl: './interface-page.component.html',
  styleUrls: ['./interface-page.component.scss']
})
export class InterfacePageComponent implements OnInit, OnDestroy {
  interfaceName: string;
  interfaceInfo: InterfaceInfo;
  paramsSubscription: Subscription;
  error: any;

  constructor(private route: ActivatedRoute) {
    this.paramsSubscription = this.route.params.subscribe(params => {
      this.interfaceName = params['interfaceName']
      const homeViewData = { ...this.route.parent.snapshot.data[LIB_DOCS_ROUTE_RESOLVER_DATA_KEYS.LIB_DOCS_HOME_VIEW] } as LibDocsHomeViewRouteData || {};
      if (!homeViewData.libDocsInfoError) {
        const svcs = homeViewData.libDocsInfo?.interfaces || [];
        this.interfaceInfo = svcs.find(svc => svc.name === this.interfaceName);
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
