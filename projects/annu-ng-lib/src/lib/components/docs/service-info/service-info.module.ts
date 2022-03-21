import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceInfoComponent } from './service-info.component';

  import { TabsModule } from '../../common-ui/tabs';
  import { CardModule } from '../../common-ui/card';
  import { CodeBlockModule } from '../../common-ui/code-block';
  import { SearchBoxModule } from '../../common-ui/search-box';
  import { ErrorModule } from '../../common-ui/error';
  import { CollapsibleModule } from '../../common-ui/collapsible';

import { ComponentPropsModule } from '../component-props';
import { ServiceMethodModule } from '../service-method';


@NgModule({
  declarations: [ServiceInfoComponent],
  imports: [
    CommonModule,
    TabsModule,
    CardModule,
    CodeBlockModule,
    SearchBoxModule,
    ServiceMethodModule,
    ComponentPropsModule,
    ErrorModule,
    CollapsibleModule,
  ],
  exports: [ServiceInfoComponent],
})
export class ServiceInfoModule { }
