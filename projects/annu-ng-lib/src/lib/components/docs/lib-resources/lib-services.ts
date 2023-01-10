import { DocsService } from '../docs.service';
import { UtilsService } from '../../../services/utils';
import { ContentEditorService } from '../../cms/content-editor/services/content-editor.service';
import { HighlightService } from '../../common-ui/code-block/highlight.service';
import { SelectionService } from '../../cms/content-editor/services/selection.service';
import { MetaService } from '../../common-ui/meta';
import { ThemeService } from '../../common-ui/theme';
import {
  ArticlesFirebaseService,
  ArticlesFirebaseHttpService,
  ArticlesFirebaseSeedService,
  ArticlesFirebaseHttpQueryService,
} from '../../../firebase/articles';

import {
  AuthFirebaseService,
  AuthFirebaseUiService,
} from '../../../firebase/auth';

import {
  ImageFireStoreService,
} from '../../../firebase/image-storage';

import {
  CommonFirebaseService,
  FirestoreParserService,
  FirestoreQueryService,
} from '../../../firebase/common-firebase';

export const LibServices = {
  UtilsService,
  ContentEditorService,
  DocsService,
  HighlightService,
  MetaService,
  SelectionService,
  ThemeService,

  ArticlesFirebaseService,
  ArticlesFirebaseHttpService,
  ArticlesFirebaseSeedService,
  ArticlesFirebaseHttpQueryService,

  AuthFirebaseService,
  AuthFirebaseUiService,

  ImageFireStoreService,

  CommonFirebaseService,
  FirestoreParserService,
  FirestoreQueryService,
};
