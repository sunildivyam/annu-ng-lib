import { DocsData } from '../../docs/docs.interface';
import { CARD_TITLE } from './card-title/docs.data';
import { CARD_IMAGE } from './card-image/docs.data';
import { CARD_BODY } from './card-body/docs.data';
import { CARD_FOOTER } from './card-footer/docs.data';

export const CardComponent: DocsData = {
    projectionContent: '<anu-card-title>' + CARD_TITLE + '</anu-card-title>' +
    '<anu-card-image>' + CARD_IMAGE + '</anu-card-image>' +
    '<anu-card-body>' + CARD_BODY + '</anu-card-body>' +
    '<anu-card-footer>' + CARD_FOOTER + 'Footer content</anu-card-footer>',
    inputPropsValues: {}
}
