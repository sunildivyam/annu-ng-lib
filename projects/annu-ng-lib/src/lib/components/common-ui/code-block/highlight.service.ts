import { Inject, Injectable } from '@angular/core';

import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { SOURCE_LANGUAGES } from './code-block.constants';
import { SourceLanguage } from './code-block.interface';

import 'prismjs';
// import 'prismjs/plugins/toolbar/prism-toolbar';
// import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
//Prism js loaded components. you can add more similarily.
// NOTE: Do not change the order of import of prism components, it matters.
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-actionscript';
import 'prismjs/components/prism-applescript';
import 'prismjs/components/prism-aspnet';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-basic';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-csharp';
import 'prismjs/components/prism-cpp';
import 'prismjs/components/prism-coffeescript';
import 'prismjs/components/prism-clojure';
import 'prismjs/components/prism-d';
import 'prismjs/components/prism-dart';
import 'prismjs/components/prism-docker';
import 'prismjs/components/prism-git';
import 'prismjs/components/prism-graphql';
import 'prismjs/components/prism-haml';
import 'prismjs/components/prism-handlebars';
import 'prismjs/components/prism-http';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-kotlin';
import 'prismjs/components/prism-less';
import 'prismjs/components/prism-markdown';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-mel';
import 'prismjs/components/prism-objectivec';
import 'prismjs/components/prism-php';
import 'prismjs/components/prism-php-extras';
import 'prismjs/components/prism-plsql';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-sass';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-scala';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-vbnet';
import 'prismjs/components/prism-visual-basic';
import 'prismjs/components/prism-yaml';

declare var Prism: any;

@Injectable()
export class HighlightService {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  public highlightAll() {
    if (isPlatformBrowser(this.platformId)) {
      Prism.highlightAll();
    }
  }

  public highlight(source: string, language = 'typescript'): string {
    if (isPlatformBrowser(this.platformId) && source && language) {
      return Prism.highlight(source, Prism.languages[language], language);
    }

    return source;
  }

  public getSourceLanguagesList(): Array<SourceLanguage> {
    return [...(SOURCE_LANGUAGES.filter(lng=> lng.enabled === true))];
  }
}
