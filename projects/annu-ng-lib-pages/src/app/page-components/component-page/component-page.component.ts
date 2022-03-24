import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'anu-component-page',
  templateUrl: './component-page.component.html',
  styleUrls: ['./component-page.component.scss']
})
export class ComponentPageComponent implements OnInit, OnDestroy {
  componentName: string;
  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute) {
    this.paramsSubscription = this.route.params.subscribe(params => this.componentName = params['componentName']);
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }
}
