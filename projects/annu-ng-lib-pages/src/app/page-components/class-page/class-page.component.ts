import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibDocsHomeViewRouteData, LIB_DOCS_ROUTE_RESOLVER_DATA_KEYS, ClassInfo } from '@annu/ng-lib';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'anu-class-page',
  templateUrl: './class-page.component.html',
  styleUrls: ['./class-page.component.scss']
})
export class ClassPageComponent implements OnInit, OnDestroy {
  className: string;
  classInfo: ClassInfo;
  paramsSubscription: Subscription;
  error: any;

  constructor(private route: ActivatedRoute) {
    this.paramsSubscription = this.route.params.subscribe(params => {
      this.className = params['className']
      const homeViewData = { ...this.route.parent.snapshot.data[LIB_DOCS_ROUTE_RESOLVER_DATA_KEYS.LIB_DOCS_HOME_VIEW] } as LibDocsHomeViewRouteData || {};
      if (!homeViewData.libDocsInfoError) {
        const svcs = homeViewData.libDocsInfo?.classes || [];
        this.classInfo = svcs.find(svc => svc.name === this.className);
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
