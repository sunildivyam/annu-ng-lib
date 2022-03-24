import { UtilsService } from '../../../services/utils';
import { DocsData } from '../../docs/docs.interface';

const utilsSvc = new UtilsService();

const ARTICLE_ELEMENT =
{
    "name": "root",
    "tagName": "article",
    "isContainer": true,
    "children": [
        {
            "name": "h1-1234",
            "tagName": "h1",
            "data": {
                "text": "Sample Heading 1"
            }
        },
        {
            "name": "h2-1234",
            "tagName": "h2",
            "data": {
                "text": "Sample Heading 2"
            }
        },
        {
            "name": "img-1234",
            "tagName": "img",
            "data": {
                "src": "/assets/start-your-business.jpg",
                "alt": "Sample Image"
            }
        },
        {
            "name": "h3-1234",
            "tagName": "h3",
            "data": {
                "text": "Sample Heading 3"
            }
        },
        {
            "name": "p-1235",
            "tagName": "p",
            "data": {
                "text": "Sample Paragraph LOreaum ipsum text Sample<b> Paragraph L</b>Oreaum ipsum text Sample Paragraph LOreaum ipsum text Sample Paragraph<a target=\"_blank\" href=\"https://helloworld.com\" title=\" LOreaum ipsum text Sampl\"> LOreaum ipsum text Sampl</a>e Paragraph LOreaum ipsum text"
            },
            "focused": true
        },
        {
            "name": "ol-12345",
            "tagName": "ol",
            "isContainer": true,
            "children": [
                {
                    "name": "li-12365",
                    "tagName": "li",
                    "data": {
                        "text": "Sample List Item 1"
                    }
                },
                {
                    "name": "li-12375",
                    "tagName": "li",
                    "data": {
                        "text": "Sample List Item 2"
                    }
                }
            ]
        },
        {
            "name": "h3-1236",
            "tagName": "h3",
            "data": {
                "text": "Sample Heading 3"
            }
        },
        {
            "name": "ol-1234",
            "tagName": "ol",
            "isContainer": true,
            "children": [
                {
                    "name": "li-1236",
                    "tagName": "li",
                    "data": {
                        "text": "Sample List Item 1"
                    }
                },
                {
                    "name": "li-1237",
                    "tagName": "li",
                    "data": {
                        "text": "Sample List Item 2"
                    }
                }
            ]
        },
        {
            "name": "h3-1237",
            "tagName": "h3",
            "data": {
                "text": "Sample Heading 3"
            }
        },
        {
            "name": "ul-1234",
            "tagName": "ul",
            "isContainer": true,
            "children": [
                {
                    "name": "li-1234",
                    "tagName": "li",
                    "data": {
                        "text": "Sample List Item 1"
                    }
                },
                {
                    "name": "li-1235",
                    "tagName": "li",
                    "data": {
                        "text": "Sample List Item 2"
                    }
                }
            ]
        }
    ]
};

export const ARTICLE = {
    id: 'sample-article',
    body: ARTICLE_ELEMENT,
    created: utilsSvc.currentDate,
    updated: utilsSvc.currentDate,
    isLive: false,
    image: {
        src: '/assets/start-your-business.jpg',
        alt: 'Sample Article title',
    },
    metaInfo: {
        title: 'Sample Article title',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        image: '/assets/start-your-business.jpg',
    },
};

export const ArticleComponent: DocsData = {
    projectionContent: '',
    inputPropsValues: {
        value: ARTICLE
    }
}
