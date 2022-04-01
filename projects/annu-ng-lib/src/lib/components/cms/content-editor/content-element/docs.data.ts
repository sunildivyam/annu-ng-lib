import { DocsData } from '../../../docs/docs.interface';
import { EDITOR_ELEMENT } from '../docs.data';

export const ContentElementComponent: DocsData = {
    projectionContent: '',
    inputPropsValues: {
        editorElement: { ...EDITOR_ELEMENT },
        fullTree: { ...EDITOR_ELEMENT },
    }
}
