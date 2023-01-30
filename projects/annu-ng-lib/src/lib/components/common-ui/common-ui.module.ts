import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsModule } from './tabs/tabs.module';
import { ColorPaletteModule } from './color-palette/color-palette.module';
import { ThemeModule } from './theme/theme.module';
import { CardModule } from './card/card.module';
import { ThemePickerModule } from './theme-picker/theme-picker.module';
import { TypographyModule } from './typography/typography.module';
import { ThemePreviewModule } from './theme-preview/theme-preview.module';
import { HamburgerModule } from './hamburger/hamburger.module';
import { ToggleModule } from './toggle/toggle.module';
import { MenuModule } from './menu/menu.module';
import { FooterNavModule } from './footer-nav/footer-nav.module';
import { PaginationModule } from './pagination/pagination.module';
import { AsideNavModule } from './aside-nav/aside-nav.module';
import { ToolbarModule } from './toolbar/toolbar.module';
import { ModalModule } from './modal/modal.module';
import { ImageFormModule } from './image-form/image-form.module';
import { LinkFormModule } from './link-form/link-form.module';
import { CodeBlockModule } from './code-block/code-block.module';
import { MetaModule } from './meta/meta.module';
import { SpinnerModule } from './spinner/spinner.module';
import { SearchBoxModule } from './search-box/search-box.module';
import { ErrorModule } from './error/error.module';
import { CollapsibleModule } from './collapsible/collapsible.module';
import { MultiSelectBoxModule } from './multi-select-box/multi-select-box.module';
import { DrawerModule } from './drawer/drawer.module';
import { ImageBrowserModule } from './image-browser/image-browser.module';
import { FiltersModule } from './filters/filters.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,

  ],
  exports: [
    TabsModule,
    ColorPaletteModule,
    ThemeModule,
    CardModule,
    ThemePickerModule,
    TypographyModule,
    ThemePreviewModule,
    HamburgerModule,
    ToggleModule,
    MenuModule,
    FooterNavModule,
    PaginationModule,
    AsideNavModule,
    ToolbarModule,
    ModalModule,
    ImageFormModule,
    LinkFormModule,
    CodeBlockModule,
    MetaModule,
    SpinnerModule,
    SearchBoxModule,
    ErrorModule,
    CollapsibleModule,
    MultiSelectBoxModule,
    DrawerModule,
    ImageBrowserModule,
    FiltersModule,
  ],
})
export class CommonUiModule { }
