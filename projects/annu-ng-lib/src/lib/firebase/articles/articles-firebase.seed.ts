import { Category, Article, EditorElement } from "../../components/cms";

export const categories: Array<Category> = [
    {
        name: 'sample-category-1',
        description: 'Sample Category 1 description text',
        title: 'Sample Category 1',
        isLive: true,
    } as Category,
    {
        name: 'sample-category-2',
        description: 'Sample Category 2 description text',
        title: 'Sample Category 2',
        isLive: false,
    } as Category,
    {
        name: 'sample-category-3',
        description: 'Sample Category 3 description text',
        title: 'Sample Category 3',
        isLive: true,
    } as Category,
    {
        name: 'sample-category-4',
        description: 'Sample Category 4 description text',
        title: 'Sample Category 4',
        isLive: false,
    } as Category
]

export const articles: Array<Article> = [
    {
        name: 'sample-article-1',
        image: {},
        metaInfo: {
            "title": "Sample Article 1",
            "description": "Sample Article 1 description text",
            "keywords": "key1, key2, key3",
            "robots": "index, follow",
            "Content-Type": "text/html; charset=utf-8",
            "language": "",
            "revisit-after": "7 days",
            "author": "Sunil Kumar",
            "type": "article",
            "article:published_time": "2022-02-07T13:42:42.529Z",
            "article:author": "",
            "article:section": "business",
            "article:tag": "",
            "image": "",
            "url": "",
            "card": "",
            "site_name": "AnnuNgLib pages",
            "audio": "",
            "video": ""
        },
        body: {
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
          } as EditorElement,
        categories: [],
        isLive: true,
    } as Article,
    {
        name: 'sample-article-2',
        image: {},
        metaInfo: {
            "title": "Sample Article 2",
            "description": "Sample Article 2 description text",
            "keywords": "key1, key2, key3",
            "robots": "index, follow",
            "Content-Type": "text/html; charset=utf-8",
            "language": "",
            "revisit-after": "7 days",
            "author": "Sunil Kumar",
            "type": "article",
            "article:published_time": "2022-02-07T13:42:42.529Z",
            "article:author": "",
            "article:section": "business",
            "article:tag": "",
            "image": "",
            "url": "",
            "card": "",
            "site_name": "AnnuNgLib pages",
            "audio": "",
            "video": ""
        },
        body: {
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
          } as EditorElement,
        categories: [],
        isLive: true,
    } as Article,
]
