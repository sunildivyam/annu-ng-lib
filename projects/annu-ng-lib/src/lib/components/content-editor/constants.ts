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
    name: 'link',
    title: 'Hyperlink',
    label: '',
    icon: '',
    iconImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABFZJREFUaEPtmHnoZmMUxz+jsW+DTNnJmr2GyBIRkS1GIiRqUBNiCGWL4g9rsiQKZUlD9hFDSZMsf6BhBtmyZons2fXhPHrcuet7f83br+755+2993nOc77P+Z7tTmGSy5RJbj8DgHF7cPDA4IGeNzBQqOcF9t4+bg9MBbYB1gd+Bz4C3gL+aItsXAA2Bc4FjgJWLxj7JXAvcCXwcROQcQA4E7gCWL7BuO+B04A769ZNNIA1gWWBL4C/Sg6+CpiTPXfNa8AHAWgGML2w72zg6ioQfQEsEzQ4DtgHWDEOks/PA/cDtwE/A9cA3n6Su4ELgfezZ+o7KNZuFs8FeQDwVBmIPgC2Bu4Bdmiggjx+CTgiM+gs4LqafWsATwC7xJp3ga0i0P+3bVQA+8XtrpZpkzZvxP8tgPVKDPQ25fWNTcEJrAssBtIZRwIPFPeNAmB/4GFghVCm0fJUF/+ZHbBHZBNTZJLrgTNaGJ+WXA6cH3/uAo7vC0DjH8q4rptNhT+UGFXkvEveCyr81hKEFHoh1i4Etu8DoGj848BM4JcSY8zhekWRNsbBBvH/JOD2lgDWjozm8k+i4I0UA12MPxW4OTNezr8JPB3PHgMOaQlgo0ixLrdCG8idAXQx3hwuTVaOU8w210Zt+CaeW2mLub4Kj4E7N14+AhzWFYC53RtL+b2ONuo24Aw8xRR7bHbgq5FypZRVuE0czAMODB168oYuAEyF5u/UqzQZr+63gc0jG/mrN5Kkd79GBiur1Ll9Jof74sF3wCbA110APAvsFRtMkYdWBGzSqZd+hH8+FAg8FSHf22J8BiwHWJRSla2izt6AF7ZSLDgHsA1ZQqrqwJ7Ac7HaPmVH4Nuq0+K5lTkVsiJ9ZmfuvwUw0OuMl7YpjuT+4YUa89/eKgByzUOVWdHPNNjPtoC5Wnkwax02Bl4BpsW73aNPKtPnzefGz4/AtZcqlSoALwM7BWpz8RLcK9G2SnjJhuxFYFdgLeCZrF8qzSShq7Px7qsC8CmwDvAVIIC24iByNHARcFPkfumnfAjsnBWmXOdIxtcBcLSzh5H3yfVtQawawWrhSsab+03Jr5coGdn4OgAGsIGsmL4M5LYibYrG75vFR67nGODWLGAbOV80oopClwEXxOKLgUtbWl9lvM2excuL0KNOXqcUWorOxtd5YEtgEWBAWkTkroWoTqqMt4l7NHRV7bdgnRiTW8u7+ndZ3TxwB3BCaLP4HBxNWdkB0swMYypV5Hyijf1/1fT1OXAJYG1oqsylwOoA6GrTaaqaP8UkZZHSOx6op8w6pwMGbzI+D1gHHwf57YAN45al0pNRba3eI0vTRGY760EaWhQBFPe/Ey2Ho+BSkSYAGuFM6neckwG/pJWJXyEcUs5rWfQmDFwbAOkw64JpbzdAz/j5zylpQQzb+eeRCTOwSVEXAE26xvJ+ADCWa88OHTwweKDnDQwU6nmBvbcPHuh9hT0VTHoP/A0LTuMxcvfaggAAAABJRU5ErkJggg=='
  } as ToolbarItem,
  {
    name: 'bold',
    title: 'Bold',
    label: '',
    icon: '',
    iconImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAcVJREFUaEPtmLsuBVEUhr/TeAaXwgNoFErReADRaRQUFIRGQugQNBqXEAotFVEqiQcgQaHQuIQHIHHPSs5J5JiZk7Vmjr137Emmm732//3/vqxMicCfUuD6iQCuE4wJxARyOvCvl9CX0rxP4Am4APaBHeBZWePX53kS0AJUT34PDABHeSBcAojud6Af2LVCuAYQ3S9AB3BpgfABQHQfAj2+AKSZ0lReLnNAQ5VY2eDNwKMWoh4J1Ko5CSwlCO0D9kIAaAQeEoROAMshALQAtwlCR4H1EACmgMUEoZ3Aqc8AsknlzJ9N2MTnQDugvhxrbbgsQ9STpRSTy6wbONa6L9+7BpDjcwTYtIj3AUD2wrRVvA8AksAaIEfomwXE9RKqaJbWejBkANE+DGxpIeqRQFbNrH7oDmgFPjQQfw1Q0ZbWD3UBJyEAyKUmjlc/Y8BqyAAzwEIIAGn90BCw7TNAVj8kuqUfOnMNoJn/57dXQJu2oavHKWQF6AUOtIN9AVgBxrXifeiFXoH58mtqz10kIL8Tb8p/5DaAa4vzlTF5APLMW9jYCFCYlcZCMQGjcYUNiwkUZqWxUEzAaFxhw2IChVlpLBR8At98JVgxmKHZCAAAAABJRU5ErkJggg=='
  } as ToolbarItem,
  {
    name: 'italic',
    title: 'Italic',
    label: '',
    icon: '',
    iconImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAATxJREFUaEPtl1sOAUEQRc/8WANfrMJjKx5rwVo8tuKxCr5Ygx9SiYjQMumarjaTlE+62r3n1lxR0PBX0XD9uIF/J+gJeAIVCfgKBQDec0K1SMANxCToCfgz8E0gaiuiDsfs5tvZA9APzA6Ao/LO15i1ARG5D4gUU8Oq4mXe2sAamASEToFN3Q10gBPQ+hB6AXrAre4GFsA8IFLeX6YQb7lCQv0MtD+ECvUucK27AdnxVUCkPBOzVOItEzCtzncAFi0k9bgLUJY6HaWkb5WA1OM4IFTqdFt3A1mq03KFslSnlYFs1WllIFt1WhnIVp0WBrJWZ1UDWf+0l9Wu5ofMDZRRjfncE4ih9TyrgfbzazSXNf4ZUEC3G9EkYKdGcbMbUEBLOuIJJMWpuMwTUEBLOuIJJMWpuMwTUEBLOvIAVacwMU4KlX0AAAAASUVORK5CYII='
  } as ToolbarItem,
  {
    name: 'underline',
    title: 'Underline',
    label: '',
    icon: '',
    iconImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAfJJREFUaEPtmL0vRFEQxX+L0kdDhUIiovVfEIIoNEqFxFd0GiQSvUKiEFHRqXz+F6ITIjQSCRVaQSbuJi937643971dWeZ2+3bmnDlnZu7LboE6P4U6rx8T8NsdtA7UYwc+A0XHdjIzVgxxZtKEAZmxTIBzM8YISbUOxDiX2TXbgYQD1gFb4tK3omoqVMGOy5bYbiG7hTIuno1QxhF6A5q9JrQC8lxzJOfFS3gF2jQgMdfoNdDnkQwAlxpiQHIuvBzB7tfgxAg4BwY9klVgQ0MMrAHrXs4ZMKzBiREwD2x5JE9Ar2KMZExugXYPZw7YrraAbuAeaPSIDoHJMj9SkqFimsROePnvQA/wUG0Bgr8LTAeIpDB5LssYOuL8XqB4id0BZjTFS2zMCEleJ3AFtAQIn92InQI37ntZ+hFgITA2EiKCZXkfayVAeIaA48AoaWv4AMYdljY3ugNFokVgE2hQM38nSPFLgUshNVzsCCUJRoH9MuNUqRAZmyngJHW1gcA8BAhsB7ACzAJNPxQkrh8AyzEz72PnJaCI2wWMuZeRXInyWY5cjXeALPaR9qqsZEjeArJMQ1SuCYiyLcekf9WB0L8ROXpZApXK3FRBDtoEKNuVytxUQX+lA0oDaxOu6UBtKlKymAClYbmHWwdyt1QJ+AWdBFkxz16l8QAAAABJRU5ErkJggg=='
  } as ToolbarItem,
];

export const TOOLBAR_STYLES: Array<ToolbarItem> = [
  {
    name: 'ul',
    title: 'Bulleted list',
    label: '',
    icon: '',
    iconImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAUJJREFUaEPtmDtuwkAQhj+q5AhEyhGALpwmZdIRhSaIFFBAk6QLlJS5DW1yhTyOENGAVnJhrTDYGht70O/S3pn5HzPe1bZw/rSc40cE6nZQDsgBowJqIaOA5vAsBy6AOXCbVPgAJsDGXLHkBFkE3oCnqNYrME6925aM5Vi6vVizCPwC7SjjH3DlhcBPBDbg/gauvRAI7TKKHHgBnr0QCEM8i4Z46mmIjw1UY75rI6vbCjkgB4wK6CxkFLBIuM5COgsV6Zc9awu1kM5CRrVzh2snzi1VRQvlQEXC5k571g70gLtEihXwmVuWEy7MciCAXwNhPwjPP9CPSDT6XmgJDCIhF8Cjl1uJAPYhIvAODL0Q6CYtdJlqoRvgywuBgLMD3KeGOA3+hGN6uNRZ/0Ybo/IhIHKgbpvkgBwwKqAWMgpoDt8BRag2MY/2fgEAAAAASUVORK5CYII=',
  } as ToolbarItem,
  {
    name: 'ol',
    title: 'Numbered list',
    label: '',
    icon: '',
    iconImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAASdJREFUaEPtmDsOwjAMhr9KMHAjNk6BxM7IirgEOxMzI0fgBhyHCQQoQ5eoj7hVGrtyt0pO4v/hxHKF8a8ynj8OoLSCroArMJKBWVroF5GiGmRTcuYB1ALUQNoUiIGOdHPv8sY8uuzhAHo5lQW4AjK+JooeUwMTpdh9jOo7PoUhB5DCUs6YWSrQ9sKqBJvSCwUHfIBlTisM3buL1RXwANbAAbhEh6juhQKwG7ADzsCpgSHVAELSR+AObIGvJQB74Ao8gQ3wavGnWgXewKIhadO3UMBjBsDQG63IOpWsSphwABK2csSmthKmith8Mxcr3TZeUfuQxYOt+j+2mwMQFrV4LtQ3YlSrgPkiNg9AaM2y4d5KlOVfaY8vIcUtJGErR6wrkINVyZ5/MAArMcqknlsAAAAASUVORK5CYII='
  } as ToolbarItem,
  {
    name: 'p',
    title: 'Paragraph',
    label: 'Normal',
    icon: '',
    iconImage: ''
  } as ToolbarItem,
  {
    name: 'h1',
    title: 'Heading 1',
    label: 'Heading 1',
    icon: '',
  } as ToolbarItem,
  {
    name: 'h2',
    title: 'Heading 2',
    label: 'Heading 2',
    icon: '',
  } as ToolbarItem,
  {
    name: 'h3',
    title: 'Heading 3',
    label: 'Heading 3',
    icon: '',
  } as ToolbarItem,
  {
    name: 'h4',
    title: 'Heading 4',
    label: 'Heading 4',
    icon: '',
  } as ToolbarItem,{
    name: 'h5',
    title: 'Heading 5',
    label: 'Heading 5',
    icon: '',
  } as ToolbarItem,
  {
    name: 'h6',
    title: 'Heading 6',
    label: 'Heading 6',
    icon: '',
  } as ToolbarItem
];
