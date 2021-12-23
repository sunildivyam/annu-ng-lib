import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TabsModule } from './components/tabs/tabs.module';
import { ColorPaletteModule } from './components/color-palette/color-palette.module';
import { ThemeModule } from './components/theme/theme.module';
import { CardModule } from './components/card/card.module';
import { ThemePickerModule } from './components/theme-picker/theme-picker.module';
import { TypographyModule } from './components/typography/typography.module';
import { ThemePreviewModule } from './components/theme-preview/theme-preview.module';
import { HamburgerModule } from './components/hamburger/hamburger.module';
import { ToggleModule } from './components/toggle/toggle.module';
import { MenuModule } from './components/menu/menu.module';
import { FooterNavModule } from './components/footer-nav/footer-nav.module';
import { PaginationModule } from './components/pagination/pagination.module';
import { AsideNavModule } from './components/aside-nav/aside-nav.module';
import { ContentEditorModule } from './components/content-editor/content-editor.module';
import { ToolbarModule } from './components/toolbar/toolbar.module';
import { ModalModule } from './components/modal/modal.module';
import { ArticleModule } from './components/article/article.module';
import { ImageFormModule } from './components/image-form/image-form.module';
import { LinkFormModule } from './components/link-form/link-form.module';


@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
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
    ContentEditorModule,
    ToolbarModule,
    ModalModule,
    ArticleModule,
    ImageFormModule,
    LinkFormModule,
  ]
})
export class AnnuNgLibModule {
  constructor() {

  }
}
