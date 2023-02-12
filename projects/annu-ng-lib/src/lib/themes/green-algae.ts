import { Theme } from '../components/common-ui/theme/theme.interface';

const jsonTheme = `{
  "name": "greenAlgae",
  "title": "Green Algae",
  "description": "Green Algae",
  "colorPalettes": [
    {
      "name": "primary",
      "hue": 81,
      "saturation": 98,
      "colors": [
        {
          "name": "DeepDark",
          "hsl": "hsl(81, 98%, 10%)",
          "h": 81,
          "s": 98,
          "l": 10
        },
        {
          "name": "Darkest",
          "hsl": "hsl(81, 98%, 11%)",
          "h": 81,
          "s": 98,
          "l": 11
        },
        {
          "name": "Darker",
          "hsl": "hsl(81, 98%, 14%)",
          "h": 81,
          "s": 98,
          "l": 14
        },
        {
          "name": "Dark",
          "hsl": "hsl(81, 98%, 18%)",
          "h": 81,
          "s": 98,
          "l": 18
        },
        {
          "name": "Normal",
          "hsl": "hsl(81, 98%, 22%)",
          "h": 81,
          "s": 98,
          "l": 22
        },
        {
          "name": "Light",
          "hsl": "hsl(81, 98%, 28%)",
          "h": 81,
          "s": 98,
          "l": 28
        },
        {
          "name": "Lighter",
          "hsl": "hsl(81, 98%, 31%)",
          "h": 81,
          "s": 98,
          "l": 31
        },
        {
          "name": "Lightest",
          "hsl": "hsl(81, 98%, 34%)",
          "h": 81,
          "s": 98,
          "l": 34
        },
        {
          "name": "DeepLight",
          "hsl": "hsl(81, 98%, 39%)",
          "h": 81,
          "s": 98,
          "l": 39
        }
      ]
    },
    {
      "name": "secondary",
      "hue": 48,
      "saturation": 75,
      "colors": [
        {
          "name": "DeepDark",
          "hsl": "hsl(48, 75%, 9%)",
          "h": 48,
          "s": 75,
          "l": 9
        },
        {
          "name": "Darkest",
          "hsl": "hsl(48, 75%, 13%)",
          "h": 48,
          "s": 75,
          "l": 13
        },
        {
          "name": "Darker",
          "hsl": "hsl(48, 75%, 18%)",
          "h": 48,
          "s": 75,
          "l": 18
        },
        {
          "name": "Dark",
          "hsl": "hsl(48, 75%, 24%)",
          "h": 48,
          "s": 75,
          "l": 24
        },
        {
          "name": "Normal",
          "hsl": "hsl(48, 75%, 32%)",
          "h": 48,
          "s": 75,
          "l": 32
        },
        {
          "name": "Light",
          "hsl": "hsl(48, 75%, 38%)",
          "h": 48,
          "s": 75,
          "l": 38
        },
        {
          "name": "Lighter",
          "hsl": "hsl(48, 75%, 43%)",
          "h": 48,
          "s": 75,
          "l": 43
        },
        {
          "name": "Lightest",
          "hsl": "hsl(48, 75%, 53%)",
          "h": 48,
          "s": 75,
          "l": 53
        },
        {
          "name": "DeepLight",
          "hsl": "hsl(48, 75%, 66%)",
          "h": 48,
          "s": 75,
          "l": 66
        }
      ]
    },
    {
      "name": "accent",
      "hue": 0,
      "saturation": 0,
      "colors": [
        {
          "name": "DeepDark",
          "hsl": "hsl(0, 0%, 12%)",
          "h": 0,
          "s": 0,
          "l": 12
        },
        {
          "name": "Darkest",
          "hsl": "hsl(0, 0%, 16%)",
          "h": 0,
          "s": 0,
          "l": 16
        },
        {
          "name": "Darker",
          "hsl": "hsl(0, 0%, 22%)",
          "h": 0,
          "s": 0,
          "l": 22
        },
        {
          "name": "Dark",
          "hsl": "hsl(0, 0%, 26%)",
          "h": 0,
          "s": 0,
          "l": 26
        },
        {
          "name": "Normal",
          "hsl": "hsl(0, 0%, 3%)",
          "h": 0,
          "s": 0,
          "l": 3
        },
        {
          "name": "Light",
          "hsl": "hsl(0, 0%, 60%)",
          "h": 0,
          "s": 0,
          "l": 60
        },
        {
          "name": "Lighter",
          "hsl": "hsl(0, 0%, 70%)",
          "h": 0,
          "s": 0,
          "l": 70
        },
        {
          "name": "Lightest",
          "hsl": "hsl(0, 0%, 83%)",
          "h": 0,
          "s": 0,
          "l": 83
        },
        {
          "name": "DeepLight",
          "hsl": "hsl(0, 0%, 97%)",
          "h": 0,
          "s": 0,
          "l": 97
        }
      ]
    },
    {
      "name": "background",
      "hue": 95,
      "saturation": 74,
      "colors": [
        {
          "name": "DeepDark",
          "hsl": "hsl(95, 74%, 15%)",
          "h": 95,
          "s": 74,
          "l": 15
        },
        {
          "name": "Darkest",
          "hsl": "hsl(95, 74%, 24%)",
          "h": 95,
          "s": 74,
          "l": 24
        },
        {
          "name": "Darker",
          "hsl": "hsl(95, 74%, 34%)",
          "h": 95,
          "s": 74,
          "l": 34
        },
        {
          "name": "Dark",
          "hsl": "hsl(95, 74%, 49%)",
          "h": 95,
          "s": 74,
          "l": 49
        },
        {
          "name": "Normal",
          "hsl": "hsl(95, 74%, 60%)",
          "h": 95,
          "s": 74,
          "l": 60
        },
        {
          "name": "Light",
          "hsl": "hsl(95, 74%, 66%)",
          "h": 95,
          "s": 74,
          "l": 66
        },
        {
          "name": "Lighter",
          "hsl": "hsl(95, 74%, 72%)",
          "h": 95,
          "s": 74,
          "l": 72
        },
        {
          "name": "Lightest",
          "hsl": "hsl(95, 74%, 82%)",
          "h": 95,
          "s": 74,
          "l": 82
        },
        {
          "name": "DeepLight",
          "hsl": "hsl(95, 74%, 92%)",
          "h": 95,
          "s": 74,
          "l": 92
        }
      ]
    }
  ],
  "typography": [
    {
      "name": "fontFamily",
      "value": "source-serif-pro, Georgia, Cambria, Times New Roman, Times, serif"
    },
    {
      "name": "fontSize",
      "value": "17px"
    },
    {
      "name": "spacing",
      "value": "1rem"
    },
    {
      "name": "borderRadius",
      "value": "0.5rem"
    },
    {
      "name": "siteWidth",
      "value": "1080px"
    },
    {
      "name": "lineHeight",
      "value": "2"
    },
    {
      "name": "letterSpacing",
      "value": "0.05rem"
    }
  ]
}`;
  export const greenAlgae: Theme = JSON.parse(jsonTheme);
