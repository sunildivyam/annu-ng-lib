import { EditorElement } from "./content-editor.interface";

export const EDITOR_ROOT_ELEMENT: EditorElement =
{
  type: 'root',
  name: 'root',
  items: [
    {
      type: 'h',
      subType: '1',
      text: 'Sample Para text Heading1.',
      name: 'h1'
    },
    {
      type: 'h',
      subType: '2',
      text: 'Sample Para text Heading 2.',
      name: 'h2'
    },
    {
      type: 'p',
      text: 'Sample Para text content.',
      name: 'p1'
    },
    {
      type: 'list',
      subType: 'ul',
      text: 'Sample List',
      name: 'list1',
      items: [
        {
          type: 'li',
          text: 'List Item 1',
          name: 'li1'
        },
        {
          type: 'li',
          text: 'List Item 2',
          name: 'li2'
        }
      ]
    },
    {
      type: 'h',
      subType: '3',
      text: 'Sample Para text Heading 3',
      name: 'h3'
    },
    {
      type: 'list',
      subType: 'ol',
      text: 'Sample List',
      name: 'list2',
      items: [
        {
          type: 'li',
          text: 'List Item 1',
          name: 'ol-li1',
          items: [
            {
              type: 'h',
              subType: '2',
              text: 'Sample Para text Heading 2.',
              name: 'h2'
            }
          ]
        },
        {
          type: 'li',
          text: 'List Item 2',
          name: 'ol-li2'
        }
      ]
    },
  ]
};

