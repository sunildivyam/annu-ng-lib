import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LibConfig } from './annu-ng-lib.interface';

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
import { ArticleEditorModule } from './components/article-editor/article-editor.module';
import { DocsModule } from './components/docs/docs.module';
import { CodeBlockModule } from './components/code-block/code-block.module';


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
    ArticleEditorModule,
    DocsModule,
    CodeBlockModule,
  ]
})
export class AnnuNgLibModule {
  constructor(@Optional() @SkipSelf() parentModule?: AnnuNgLibModule) {
    if (parentModule) {
      throw new Error('AnnuNgLibModule is already loaded. Import it in the appModule only');
    }
  }

  static forRoot(libConfig: LibConfig): ModuleWithProviders<AnnuNgLibModule> {
    return {
      ngModule: AnnuNgLibModule,
      providers: [
        { provide: LibConfig, useValue: libConfig }
      ]
    };
  }
}
