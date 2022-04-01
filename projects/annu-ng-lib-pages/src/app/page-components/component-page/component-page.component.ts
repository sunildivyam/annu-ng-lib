import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComponentInfo, LibDocsHomeViewRouteData, LIB_DOCS_ROUTE_RESOLVER_DATA_KEYS } from '@annu/ng-lib';
import { Subscription } from 'rxjs';

@Component({
  selector: 'anu-component-page',
  templateUrl: './component-page.component.html',
  styleUrls: ['./component-page.component.scss']
})
export class ComponentPageComponent implements OnInit, OnDestroy {
  componentName: string;
  componentInfo: ComponentInfo;
  paramsSubscription: Subscription;
  error: any;

  constructor(private route: ActivatedRoute) {
    this.paramsSubscription = this.route.params.subscribe(params => {
      this.componentName = params['componentName']
      const homeViewData = { ...this.route.parent.snapshot.data[LIB_DOCS_ROUTE_RESOLVER_DATA_KEYS.LIB_DOCS_HOME_VIEW] } as LibDocsHomeViewRouteData || {};
      if (!homeViewData.libDocsInfoError) {
        const cmps = homeViewData.libDocsInfo?.components || [];
        this.componentInfo = cmps.find(cmp => cmp.name === this.componentName);
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
