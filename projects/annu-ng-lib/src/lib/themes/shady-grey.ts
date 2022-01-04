import { Theme } from '../components/common-ui';

const jsonTheme = `{
  "name": "shadyGrey",
  "title": "Shady Grey",
  "description": "Shady Grey Theme",
  "colorPalettes": [
    {
      "name": "primary",
      "hue": 50,
      "saturation": 26,
      "colors": [
        {
          "name": "DeepDark",
          "hsl": "hsl(50, 26%, 10%)"
        },
        {
          "name": "Darkest",
          "hsl": "hsl(50, 26%, 21.125%)"
        },
        {
          "name": "Darker",
          "hsl": "hsl(50, 26%, 32.25%)"
        },
        {
          "name": "Dark",
          "hsl": "hsl(50, 26%, 43.375%)"
        },
        {
          "name": "Normal",
          "hsl": "hsl(50, 26%, 54.5%)"
        },
        {
          "name": "Light",
          "hsl": "hsl(50, 26%, 65.625%)"
        },
        {
          "name": "Lighter",
          "hsl": "hsl(50, 26%, 76.75%)"
        },
        {
          "name": "Lightest",
          "hsl": "hsl(50, 26%, 87.875%)"
        },
        {
          "name": "DeepLight",
          "hsl": "hsl(50, 26%, 99%)"
        }
      ]
    },
    {
      "name": "secondary",
      "hue": 38,
      "saturation": 50,
      "colors": [
        {
          "name": "DeepDark",
          "hsl": "hsl(38, 50%, 10%)"
        },
        {
          "name": "Darkest",
          "hsl": "hsl(38, 50%, 21.125%)"
        },
        {
          "name": "Darker",
          "hsl": "hsl(38, 50%, 32.25%)"
        },
        {
          "name": "Dark",
          "hsl": "hsl(38, 50%, 43.375%)"
        },
        {
          "name": "Normal",
          "hsl": "hsl(38, 50%, 54.5%)"
        },
        {
          "name": "Light",
          "hsl": "hsl(38, 50%, 65.625%)"
        },
        {
          "name": "Lighter",
          "hsl": "hsl(38, 50%, 76.75%)"
        },
        {
          "name": "Lightest",
          "hsl": "hsl(38, 50%, 87.875%)"
        },
        {
          "name": "DeepLight",
          "hsl": "hsl(38, 50%, 99%)"
        }
      ]
    },
    {
      "name": "accent",
      "hue": 55,
      "saturation": 54,
      "colors": [
        {
          "name": "DeepDark",
          "hsl": "hsl(55, 54%, 10%)"
        },
        {
          "name": "Darkest",
          "hsl": "hsl(55, 54%, 21.125%)"
        },
        {
          "name": "Darker",
          "hsl": "hsl(55, 54%, 32.25%)"
        },
        {
          "name": "Dark",
          "hsl": "hsl(55, 54%, 43.375%)"
        },
        {
          "name": "Normal",
          "hsl": "hsl(55, 54%, 54.5%)"
        },
        {
          "name": "Light",
          "hsl": "hsl(55, 54%, 65.625%)"
        },
        {
          "name": "Lighter",
          "hsl": "hsl(55, 54%, 76.75%)"
        },
        {
          "name": "Lightest",
          "hsl": "hsl(55, 54%, 87.875%)"
        },
        {
          "name": "DeepLight",
          "hsl": "hsl(55, 54%, 99%)"
        }
      ]
    },
    {
      "name": "background",
      "hue": 225,
      "saturation": 100,
      "colors": [
        {
          "name": "DeepDark",
          "hsl": "hsl(225, 100%, 10%)"
        },
        {
          "name": "Darkest",
          "hsl": "hsl(225, 100%, 21.125%)"
        },
        {
          "name": "Darker",
          "hsl": "hsl(225, 100%, 32.25%)"
        },
        {
          "name": "Dark",
          "hsl": "hsl(225, 100%, 43.375%)"
        },
        {
          "name": "Normal",
          "hsl": "hsl(225, 100%, 54.5%)"
        },
        {
          "name": "Light",
          "hsl": "hsl(225, 100%, 65.625%)"
        },
        {
          "name": "Lighter",
          "hsl": "hsl(225, 100%, 76.75%)"
        },
        {
          "name": "Lightest",
          "hsl": "hsl(225, 100%, 87.875%)"
        },
        {
          "name": "DeepLight",
          "hsl": "hsl(225, 100%, 99%)"
        }
      ]
    }
  ],
  "typography": [
    {
      "name": "fontFamily",
      "value": "Open Sans"
    },
    {
      "name": "fontSize",
      "value": "14px"
    }
  ]
}`;
export const shadyGrey: Theme = JSON.parse(jsonTheme);
