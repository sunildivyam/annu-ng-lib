import { Component, Inject, Injector, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { ComponentInfo, ComponentProp } from '../docs.interface';
import { DocsService } from '../docs.service';
import { LibComponents, LibComponentsContent } from '../lib-resources';

@Component({
  selector: 'anu-component-usage',
  templateUrl: './component-usage.component.html',
  styleUrls: ['./component-usage.component.scss']
})
export class ComponentUsageComponent implements OnInit, OnChanges {
  @Input() componentInfo: ComponentInfo = null;

  component: Component;
  componentInjector: Injector;
  componentContent: Array<Array<any>>;
  usageSource: string;

  // Properties Form Vars
  inputPropsValues: any = {};

  constructor(private injector: Injector,
    @Inject(Renderer2) private readonly renderer: Renderer2,
    private docService: DocsService) {
    this.componentInfo = this.injector.get('componentInfo', this.componentInfo);
  }

  ngOnInit(): void {
    this.renderComponent();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.renderComponent();
  }

  private async renderComponent() {
    if (!this.componentInfo) return;

    this.component = this.componentInfo.name === 'ComponentUsageComponent' ? ComponentUsageComponent : LibComponents[this.componentInfo.name];
    this.componentInfo.inputProps.forEach(prop => {
      const propValue = LibComponentsContent[this.componentInfo.name]?.inputPropsValues?.[prop.name] || prop.defaultValue;

      this.inputPropsValues[prop.name] = this.docService.parsePropValueToStr(prop, propValue);
    });
    this.createInjector();
    this.projectContent();
  }

  private projectContent() {
    const el = this.renderer.createElement('div');
    el.innerHTML = LibComponentsContent[this.componentInfo.name]?.projectionContent || '';
    this.componentContent = [];
    for (let chNode of el.childNodes) {
      this.componentContent.push([chNode])
    }
  }

  private createInjector() {
    if (!this.componentInfo) return;

    const inputPropProviders = this.componentInfo.inputProps.map(prop => {
      return {
        provide: prop.name,
        useValue: this.docService.parsePropValue(prop, this.inputPropsValues[prop.name]),
      }
    });

    this.componentInjector = Injector.create({
      providers: inputPropProviders,
      parent: this.injector
    })

    this.usageSource = this.buildUsageSource(this.componentInfo);
  }

  public inputPropsChanged(event: any, prop: ComponentProp): void {
    if (prop.type === 'boolean') {
      this.inputPropsValues[prop.name] = event;
    }

    this.createInjector();
  }

  private buildUsageSource(componentInfo: ComponentInfo): string {
    if (!componentInfo) return '';
    // Open the tag
    let usageSrc = `<${componentInfo.selector} `;

    // Add Properties
    componentInfo.inputProps.forEach(prop => {
      const propVal = this.inputPropsValues[prop.name];
      usageSrc += `\n\t[${prop.name}]='${propVal}'`
    })

    // add projectedContent source
    const projectedContent = LibComponentsContent[this.componentInfo.name]?.projectionContent || '';
    usageSrc += projectedContent? `>\n\t${projectedContent}` : '>';

    // Close the tag
    usageSrc += `\n</${componentInfo.selector}>`;
    return usageSrc;
  }
}
