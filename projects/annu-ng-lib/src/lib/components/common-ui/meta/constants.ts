import { MetaProp, MetaPropertyType, MetaPropValue } from "./meta.interface";

export const META_ALLOWED_VALUES = {
    robots: [
        { name: 'index, follow', label: 'index, follow' },
        { name: 'index, nofollow', label: 'index, nofollow' },
        { name: 'noindex, follow', label: 'noindex, follow' },
        { name: 'noindex, nofollow', label: 'noindex, nofollow' },
    ] as Array<MetaPropValue>,
    contentTypes: [
        { name: 'text/html; charset=utf-8', label: 'UTF-8' },
        { name: 'text/html; charset=utf-16', label: 'UTF-16' },
        { name: 'text/html; charset=iso-8859-1', label: 'ISO-8859-1' },
        { name: 'text/html; charset=windows-1252', label: 'WINDOWS-1252' },
    ] as Array<MetaPropValue>,
    languages: [
        { name: 'english', label: 'English' },
        { name: 'french', label: 'French' },
        { name: 'russian', label: 'Russian' },
        { name: 'spanish', label: 'Spanish' },
        { name: 'arabic', label: 'Arabic' },
        { name: 'korean', label: 'Korean' },
        { name: 'japaneese', label: 'Japaneese' },
        { name: 'hindi', label: 'Hindi' },
        { name: 'portuguese', label: 'Portuguese' },
        { name: '', label: 'None' },
    ] as Array<MetaPropValue>,
    types: [
        { name: 'article', label: 'Article' },
        { name: 'website', label: 'Website' },
        { name: 'book', label: 'Book' },
        { name: 'profile', label: 'Profile' },
        { name: 'music', label: 'Music' },
        { name: 'video', label: 'Video' },
        { name: 'video.movie', label: 'Video (Movie)' },
    ] as Array<MetaPropValue>,
    cards: [
        { name: 'summary_large_image', label: 'Summary Large Image' },
        { name: '', label: 'None' },
    ] as Array<MetaPropValue>,
    articleSections: [
        { name: 'technology', label: 'Technology' },
        { name: 'business', label: 'Business' },
        { name: 'education', label: 'Education' },
        { name: 'entertainment', label: 'Entertainment' },
        { name: '', label: 'None' },
    ] as Array<MetaPropValue>
}

export const META_PROP_TYPES = {
    NAME: {
        type: 'name'
    } as MetaPropertyType,
    PROPERTY: {
        type: 'property'
    } as MetaPropertyType,
    OG_PROPERTY: {
        type: 'property',
        subType: 'og'
    } as MetaPropertyType,
    TWITTER_PROPERTY: {
        type: 'property',
        subType: 'twitter'
    } as MetaPropertyType,
    HTTP_EQUIV: {
        type: 'httpEquiv',
    } as MetaPropertyType
}

export const META_PROPS: Array<MetaProp> = [
    {
        name: 'title',
        types: [META_PROP_TYPES.NAME, META_PROP_TYPES.OG_PROPERTY, META_PROP_TYPES.TWITTER_PROPERTY],
        required: true,
        label: 'Page Title',
    },
    {
        name: 'description',
        types: [META_PROP_TYPES.NAME, META_PROP_TYPES.OG_PROPERTY, META_PROP_TYPES.TWITTER_PROPERTY],
        required: true,
        label: 'Page Description'
    },
    {
        name: 'keywords',
        types: [META_PROP_TYPES.NAME],
        required: true,
        label: 'Page Keywords (separated by commas)',
    },
    {
        name: 'robots',
        types: [META_PROP_TYPES.NAME],
        allowedValues: META_ALLOWED_VALUES.robots,
        label: 'Allow robots to index your web page and follow all links?',
        defaultValue: META_ALLOWED_VALUES.robots[0].name,
    },
    {
        name: 'Content-Type',
        types: [META_PROP_TYPES.HTTP_EQUIV],
        allowedValues: META_ALLOWED_VALUES.contentTypes,
        label: 'What type of content will your web page display?',
        defaultValue: META_ALLOWED_VALUES.contentTypes[0].name,
    },
    {
        name: 'language',
        types: [META_PROP_TYPES.NAME],
        allowedValues: META_ALLOWED_VALUES.languages,
        label: 'What is your primary language?',
    },
    {
        name: 'revisit-after',
        types: [META_PROP_TYPES.NAME],
        label: 'Search engines should revisit the page after (eg. 7 days)',
        defaultValue: '7 days'
    },
    {
        name: 'author',
        types: [META_PROP_TYPES.NAME],
        label: 'Page Author',
    },
    {
        name: 'type',
        types: [META_PROP_TYPES.OG_PROPERTY],
        allowedValues: META_ALLOWED_VALUES.types,
        label: 'What type of content your web page has?',
        defaultValue: META_ALLOWED_VALUES.types[0].name,
    },
    // Article creation date/ published date
    {
        name: 'article:published_time',
        types: [META_PROP_TYPES.PROPERTY],
        label: 'When was the page (Article) published?',
        defaultValue: (new Date()).toISOString(),
    },
    // Article Author profile Url/name
    {
        name: 'article:author',
        types: [META_PROP_TYPES.PROPERTY],
        label: 'Article Author profile url/ name',
    },
    // Article Category ie. Technology, Business etc.
    {
        name: 'article:section',
        types: [META_PROP_TYPES.PROPERTY],
        allowedValues: META_ALLOWED_VALUES.articleSections,
        label: 'Article Category ie. Technology, Business etc.',
    },
    // Article tag names / keywords, comma separated
    {
        name: 'article:tag',
        types: [META_PROP_TYPES.PROPERTY],
        label: 'Tag names or keywords associated with the article',
    },
    {
        name: 'image',
        types: [META_PROP_TYPES.OG_PROPERTY, META_PROP_TYPES.TWITTER_PROPERTY],
        label: 'Image Url of your web page/article/video/audio',
    },
    {
        name: 'url',
        types: [META_PROP_TYPES.OG_PROPERTY, META_PROP_TYPES.TWITTER_PROPERTY],
        label: 'Canonical page Url'
    },
    {
        name: 'card',
        types: [META_PROP_TYPES.TWITTER_PROPERTY],
        allowedValues: META_ALLOWED_VALUES.cards,
        label: 'Twitter Card',
    },
    {
        name: 'site_name',
        types: [META_PROP_TYPES.OG_PROPERTY],
        label: 'Main Site name',
    },
    {
        name: 'audio',
        types: [META_PROP_TYPES.OG_PROPERTY],
        label: 'Audio Url',
    },
    {
        name: 'video',
        types: [META_PROP_TYPES.OG_PROPERTY],
        label: 'Video Url',
    }

];
