import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibDocsHomeViewRouteData, LIB_DOCS_ROUTE_RESOLVER_DATA_KEYS, GuardInfo } from '@annu/ng-lib';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'anu-guard-page',
  templateUrl: './guard-page.component.html',
  styleUrls: ['./guard-page.component.scss']
})
export class GuardPageComponent implements OnInit, OnDestroy {
  guardName: string;
  guardInfo: GuardInfo;
  paramsSubscription: Subscription;
  error: any;

  constructor(private route: ActivatedRoute) {
    this.paramsSubscription = this.route.params.subscribe(params => {
      this.guardName = params['guardName']
      const homeViewData = { ...this.route.parent.snapshot.data[LIB_DOCS_ROUTE_RESOLVER_DATA_KEYS.LIB_DOCS_HOME_VIEW] } as LibDocsHomeViewRouteData || {};
      if (!homeViewData.libDocsInfoError) {
        const svcs = homeViewData.libDocsInfo?.guards || [];
        this.guardInfo = svcs.find(svc => svc.name === this.guardName);
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
