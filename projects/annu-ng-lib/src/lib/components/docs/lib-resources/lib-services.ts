import { DocsService } from '../docs.service';
import { UtilsService } from '../../../services/utils/utils.service';
import { SitemapService } from '../../../components/common-ui/sitemap/sitemap.service';
import { ContentEditorService } from '../../cms/content-editor/services/content-editor.service';
import { HighlightService } from '../../common-ui/code-block/highlight.service';
import { SelectionService } from '../../cms/content-editor/services/selection.service';
import { MetaService } from '../../common-ui/meta';
import { ThemeService } from '../../common-ui/theme';

import { ArticlesFirebaseService } from '../../../firebase/articles/articles-firebase.service';
import { ArticlesFirebaseHttpService } from '../../../firebase/articles/articles-firebase-http.service';
import { CategoriesFirebaseHttpService } from '../../../firebase/articles/categories-firebase-http.service';
import { ArticlesFirebaseSeedService } from '../../../firebase/articles/articles-firebase-seed.service';
import { ArticlesFirebaseHttpQueryService } from '../../../firebase/articles/articles-firebase-http-query.service';

import {
  AuthFirebaseService,
  AuthFirebaseUiService,
} from '../../../firebase/auth';

import {
  ImageFireStoreService,
} from '../../../firebase/image-storage';

import {
  SitemapFireStoreService,
} from '../../../firebase/sitemap-storage';

import {
  CommonFirebaseService,
  FirestoreParserService,
  FirestoreQueryService,
} from '../../../firebase/common-firebase';

export const LibServices = {
  UtilsService,
  SitemapService,
  ContentEditorService,
  DocsService,
  HighlightService,
  MetaService,
  SelectionService,
  ThemeService,

  CommonFirebaseService,
  FirestoreParserService,
  FirestoreQueryService,

  ArticlesFirebaseHttpService,
  CategoriesFirebaseHttpService,
  ArticlesFirebaseHttpQueryService,

  AuthFirebaseService,
  AuthFirebaseUiService,

  ImageFireStoreService,

  SitemapFireStoreService,

  ArticlesFirebaseService,
  ArticlesFirebaseSeedService,

};
