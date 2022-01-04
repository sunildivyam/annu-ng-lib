import { Theme } from '../components/common-ui';

const jsonTheme = `{
  "name": "pureGold",
  "title": "Pure Gold",
  "description": "Pure Gold",
  "colorPalettes": [
    {
      "name": "primary",
      "hue": 46,
      "saturation": 100,
      "colors": [
        {
          "name": "DeepDark",
          "hsl": "hsl(46, 100%, 10%)"
        },
        {
          "name": "Darkest",
          "hsl": "hsl(46, 100%, 21.125%)"
        },
        {
          "name": "Darker",
          "hsl": "hsl(46, 100%, 32.25%)"
        },
        {
          "name": "Dark",
          "hsl": "hsl(46, 100%, 43.375%)"
        },
        {
          "name": "Normal",
          "hsl": "hsl(46, 100%, 54.5%)"
        },
        {
          "name": "Light",
          "hsl": "hsl(46, 100%, 65.625%)"
        },
        {
          "name": "Lighter",
          "hsl": "hsl(46, 100%, 76.75%)"
        },
        {
          "name": "Lightest",
          "hsl": "hsl(46, 100%, 87.875%)"
        },
        {
          "name": "DeepLight",
          "hsl": "hsl(46, 100%, 99%)"
        }
      ]
    },
    {
      "name": "secondary",
      "hue": 126,
      "saturation": 69,
      "colors": [
        {
          "name": "DeepDark",
          "hsl": "hsl(126, 69%, 10%)"
        },
        {
          "name": "Darkest",
          "hsl": "hsl(126, 69%, 21.125%)"
        },
        {
          "name": "Darker",
          "hsl": "hsl(126, 69%, 32.25%)"
        },
        {
          "name": "Dark",
          "hsl": "hsl(126, 69%, 43.375%)"
        },
        {
          "name": "Normal",
          "hsl": "hsl(126, 69%, 54.5%)"
        },
        {
          "name": "Light",
          "hsl": "hsl(126, 69%, 65.625%)"
        },
        {
          "name": "Lighter",
          "hsl": "hsl(126, 69%, 76.75%)"
        },
        {
          "name": "Lightest",
          "hsl": "hsl(126, 69%, 87.875%)"
        },
        {
          "name": "DeepLight",
          "hsl": "hsl(126, 69%, 99%)"
        }
      ]
    },
    {
      "name": "accent",
      "hue": 80,
      "saturation": 0,
      "colors": [
        {
          "name": "DeepDark",
          "hsl": "hsl(80, 0%, 10%)"
        },
        {
          "name": "Darkest",
          "hsl": "hsl(80, 0%, 21.125%)"
        },
        {
          "name": "Darker",
          "hsl": "hsl(80, 0%, 32.25%)"
        },
        {
          "name": "Dark",
          "hsl": "hsl(80, 0%, 43.375%)"
        },
        {
          "name": "Normal",
          "hsl": "hsl(80, 0%, 54.5%)"
        },
        {
          "name": "Light",
          "hsl": "hsl(80, 0%, 65.625%)"
        },
        {
          "name": "Lighter",
          "hsl": "hsl(80, 0%, 76.75%)"
        },
        {
          "name": "Lightest",
          "hsl": "hsl(80, 0%, 87.875%)"
        },
        {
          "name": "DeepLight",
          "hsl": "hsl(80, 0%, 99%)"
        }
      ]
    },
    {
      "name": "background",
      "hue": 96,
      "saturation": 51,
      "colors": [
        {
          "name": "DeepDark",
          "hsl": "hsl(96, 51%, 10%)"
        },
        {
          "name": "Darkest",
          "hsl": "hsl(96, 51%, 21.125%)"
        },
        {
          "name": "Darker",
          "hsl": "hsl(96, 51%, 32.25%)"
        },
        {
          "name": "Dark",
          "hsl": "hsl(96, 51%, 43.375%)"
        },
        {
          "name": "Normal",
          "hsl": "hsl(96, 51%, 54.5%)"
        },
        {
          "name": "Light",
          "hsl": "hsl(96, 51%, 65.625%)"
        },
        {
          "name": "Lighter",
          "hsl": "hsl(96, 51%, 76.75%)"
        },
        {
          "name": "Lightest",
          "hsl": "hsl(96, 51%, 87.875%)"
        },
        {
          "name": "DeepLight",
          "hsl": "hsl(96, 51%, 99%)"
        }
      ]
    }
  ],
  "typography": [
    {
      "name": "fontFamily",
      "value": "Times new roman"
    },
    {
      "name": "fontSize",
      "value": "18px"
    }
  ]
}`;
export const pureGold: Theme = JSON.parse(jsonTheme);
