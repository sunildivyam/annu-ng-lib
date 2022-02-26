import { Category, Article, EditorElement } from "../../components/cms";

export const getSeedsCategories = (recordCount = 6): Array<Category> => {
    const categories: Array<Category> = [];
    const mSeconds = (new Date()).getMilliseconds();
    for (let i = 1; i <= recordCount; i++) {
        const id = `${mSeconds}-${i}`;
        categories.push({
            id: 'sample-category-title-' + id,
            description: `Sample Category ${id} description text`,
            shortTitle: 'Sample Category short title ' + id,
            title: 'Sample Category title' + id,
            isLive: false,
        } as Category)
    }

    return categories;
}

export const getSeedsArticles = (recordCount = 6): Array<Article> => {
    const article: Array<Article> = [];
    const mSeconds = (new Date()).getMilliseconds();

    for (let i = 1; i <= recordCount; i++) {
        const id = `${mSeconds}-${i}`;
        article.push({
            name: 'sample-article-' + id,
            image: {},
            metaInfo: {
                "title": "Sample Article " + id,
                "description": `Sample Article ${id} description text`,
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
        } as Article)
    }

    return article;
}
