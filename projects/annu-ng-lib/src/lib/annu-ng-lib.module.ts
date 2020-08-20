import { NgModule } from '@angular/core';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [CardComponent],
  imports: [
  ],
  exports: [CardComponent]
})
export class AnnuNgLibModule {
  constructor() {
    console.log(this.cssVar('anu-background'));
  }

  private cssVar(name: string, value: string = ''): string {
    if (name[0] !== '-') {
      name = '--' + name; // allow passing with or without --
    }
    if (value) {
      document.documentElement.style.setProperty(name, value);
    }
    return getComputedStyle(document.documentElement).getPropertyValue(name);
  }
}
