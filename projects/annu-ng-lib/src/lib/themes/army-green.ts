import { Theme } from '../components/common-ui';

const jsonTheme = `
{
  "name": "armyGreen",
  "title": "Army Green",
  "description": "Army Green Theme",
  "colorPalettes": [
    {
      "name": "primary",
      "hue": 119,
      "saturation": 71,
      "colors": [
        {
          "name": "DeepDark",
          "hsl": "hsl(119, 71%, 10%)"
        },
        {
          "name": "Darkest",
          "hsl": "hsl(119, 71%, 21.125%)"
        },
        {
          "name": "Darker",
          "hsl": "hsl(119, 71%, 32.25%)"
        },
        {
          "name": "Dark",
          "hsl": "hsl(119, 71%, 43.375%)"
        },
        {
          "name": "Normal",
          "hsl": "hsl(119, 71%, 54.5%)"
        },
        {
          "name": "Light",
          "hsl": "hsl(119, 71%, 65.625%)"
        },
        {
          "name": "Lighter",
          "hsl": "hsl(119, 71%, 76.75%)"
        },
        {
          "name": "Lightest",
          "hsl": "hsl(119, 71%, 87.875%)"
        },
        {
          "name": "DeepLight",
          "hsl": "hsl(119, 71%, 99%)"
        }
      ]
    },
    {
      "name": "secondary",
      "hue": 180,
      "saturation": 74,
      "colors": [
        {
          "name": "DeepDark",
          "hsl": "hsl(180, 74%, 10%)"
        },
        {
          "name": "Darkest",
          "hsl": "hsl(180, 74%, 21.125%)"
        },
        {
          "name": "Darker",
          "hsl": "hsl(180, 74%, 32.25%)"
        },
        {
          "name": "Dark",
          "hsl": "hsl(180, 74%, 43.375%)"
        },
        {
          "name": "Normal",
          "hsl": "hsl(180, 74%, 54.5%)"
        },
        {
          "name": "Light",
          "hsl": "hsl(180, 74%, 65.625%)"
        },
        {
          "name": "Lighter",
          "hsl": "hsl(180, 74%, 76.75%)"
        },
        {
          "name": "Lightest",
          "hsl": "hsl(180, 74%, 87.875%)"
        },
        {
          "name": "DeepLight",
          "hsl": "hsl(180, 74%, 99%)"
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
          "hsl": "hsl(0, 0%, 10%)"
        },
        {
          "name": "Darkest",
          "hsl": "hsl(0, 0%, 21.125%)"
        },
        {
          "name": "Darker",
          "hsl": "hsl(0, 0%, 32.25%)"
        },
        {
          "name": "Dark",
          "hsl": "hsl(0, 0%, 43.375%)"
        },
        {
          "name": "Normal",
          "hsl": "hsl(0, 0%, 54.5%)"
        },
        {
          "name": "Light",
          "hsl": "hsl(0, 0%, 65.625%)"
        },
        {
          "name": "Lighter",
          "hsl": "hsl(0, 0%, 76.75%)"
        },
        {
          "name": "Lightest",
          "hsl": "hsl(0, 0%, 87.875%)"
        },
        {
          "name": "DeepLight",
          "hsl": "hsl(0, 0%, 99%)"
        }
      ]
    },
    {
      "name": "background",
      "hue": 222,
      "saturation": 66,
      "colors": [
        {
          "name": "DeepDark",
          "hsl": "hsl(222, 66%, 10%)"
        },
        {
          "name": "Darkest",
          "hsl": "hsl(222, 66%, 21.125%)"
        },
        {
          "name": "Darker",
          "hsl": "hsl(222, 66%, 32.25%)"
        },
        {
          "name": "Dark",
          "hsl": "hsl(222, 66%, 43.375%)"
        },
        {
          "name": "Normal",
          "hsl": "hsl(222, 66%, 54.5%)"
        },
        {
          "name": "Light",
          "hsl": "hsl(222, 66%, 65.625%)"
        },
        {
          "name": "Lighter",
          "hsl": "hsl(222, 66%, 76.75%)"
        },
        {
          "name": "Lightest",
          "hsl": "hsl(222, 66%, 87.875%)"
        },
        {
          "name": "DeepLight",
          "hsl": "hsl(222, 66%, 99%)"
        }
      ]
    }
  ],
  "typography": [
    {
      "name": "fontFamily",
      "value": "Arial"
    },
    {
      "name": "fontSize",
      "value": "14px"
    }
  ]
}`;

export const armyGreen: Theme = JSON.parse(jsonTheme);
