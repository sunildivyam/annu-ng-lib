import { ToolbarItem } from "../toolbar";
import { EditorElement } from "./content-editor.interface";


export const EDITOR_ROOT_ELEMENT: EditorElement =
{
  name: 'root',
  tagName: 'article',
  isContainer: true,
  children: [
    {
      name: 'h1-1234',
      tagName: 'h1',
      data: {
        text: 'Sample Heading 1',
      }
    },
    {
      name: 'h2-1234',
      tagName: 'h2',
      data: {
        text: 'Sample Heading 2',
      }
    },
    {
      name: 'p-1234',
      tagName: 'p',
      data: {
        text: 'Sample Paragraph LOreaum ipsum text Sample Paragraph LOreaum ipsum text Sample Paragraph LOreaum ipsum text Sample Paragraph LOreaum ipsum text Sample Paragraph LOreaum ipsum text',
      }
    },
    {
      name: 'h3-1234',
      tagName: 'h3',
      data: {
        text: 'Sample Heading 3',
      }
    },
    {
      name: 'p-1235',
      tagName: 'p',
      data: {
        text: 'Sample Paragraph LOreaum ipsum text Sample Paragraph LOreaum ipsum text Sample Paragraph LOreaum ipsum text Sample Paragraph LOreaum ipsum text Sample Paragraph LOreaum ipsum text',
      }
    },
    {
      name: 'ol-12345',
      tagName: 'ol',
      isContainer: true,
      children: [
        {
          name: 'li-12365',
          tagName: 'li',
          data: {
            text: 'Sample List Item 1',
          }
        },
        {
          name: 'li-12375',
          tagName: 'li',
          data: {
            text: 'Sample List Item 2',
          }
        },
      ]
    },
    {
      name: 'h3-1236',
      tagName: 'h3',
      data: {
        text: 'Sample Heading 3',
      }
    },
    {
      name: 'ol-1234',
      tagName: 'ol',
      isContainer: true,
      children: [
        {
          name: 'li-1236',
          tagName: 'li',
          data: {
            text: 'Sample List Item 1',
          }
        },
        {
          name: 'li-1237',
          tagName: 'li',
          data: {
            text: 'Sample List Item 2',
          }
        },
      ]
    },
    {
      name: 'h3-1237',
      tagName: 'h3',
      data: {
        text: 'Sample Heading 3',
      }
    },
    {
      name: 'ul-1234',
      tagName: 'ul',
      isContainer: true,
      children: [
        {
          name: 'li-1234',
          tagName: 'li',
          data: {
            text: 'Sample List Item 1',
          }
        },
        {
          name: 'li-1235',
          tagName: 'li',
          data: {
            text: 'Sample List Item 2',
          }
        },
      ]
    },
  ]
};

export const TOOLBAR_FORMATTING: Array<ToolbarItem> = [
  {
    name: 'bold',
    title: 'Bold',
    label: 'B',
    icon: '',
  } as ToolbarItem,
  {
    name: 'italic',
    title: 'Italic',
    label: 'I',
    icon: '',
  } as ToolbarItem,
  {
    name: 'underline',
    title: 'Underline',
    label: 'U',
    icon: '',
  } as ToolbarItem,
  {
    name: 'link',
    title: 'Hyperlink',
    label: '',
    icon: '&#128279;',
  } as ToolbarItem
];

