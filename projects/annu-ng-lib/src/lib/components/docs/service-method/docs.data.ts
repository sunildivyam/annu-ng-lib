import { DocsData } from '../../docs/docs.interface';

export const ServiceMethodComponent: DocsData = {
    projectionContent: '',
    inputPropsValues: {
        method: {
            "name": "getCssVar",
            "returnType": "CssVar",
            "args": [
                {
                    "name": "name",
                    "type": "string",
                    "deprecated": false,
                    "deprecationMessage": ""
                },
                {
                    "name": "value",
                    "type": "string",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "defaultValue": "''"
                }
            ],
            "description": "Returns the CSS variable name",
        }
    }
}
