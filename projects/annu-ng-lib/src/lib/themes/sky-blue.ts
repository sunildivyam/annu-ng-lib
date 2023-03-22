import { Theme } from '../components/common-ui/theme/theme.interface';

const jsonTheme = `{
    "name": "skyBlue",
    "title": "Sky Blue",
    "description": "Sky Blue",
    "colorPalettes": [
      {
        "name": "primary",
        "hue": 199,
        "saturation": 92,
        "colors": [
          {
            "name": "DeepDark",
            "hsl": "hsl(199, 92%, 16%)",
            "h": 199,
            "s": 92,
            "l": 16
          },
          {
            "name": "Darkest",
            "hsl": "hsl(199, 92%, 22%)",
            "h": 199,
            "s": 92,
            "l": 22
          },
          {
            "name": "Darker",
            "hsl": "hsl(199, 92%, 28%)",
            "h": 199,
            "s": 92,
            "l": 28
          },
          {
            "name": "Dark",
            "hsl": "hsl(199, 92%, 36%)",
            "h": 199,
            "s": 92,
            "l": 36
          },
          {
            "name": "Normal",
            "hsl": "hsl(199, 92%, 41%)",
            "h": 199,
            "s": 92,
            "l": 41
          },
          {
            "name": "Light",
            "hsl": "hsl(199, 92%, 50%)",
            "h": 199,
            "s": 92,
            "l": 50
          },
          {
            "name": "Lighter",
            "hsl": "hsl(199, 92%, 59%)",
            "h": 199,
            "s": 92,
            "l": 59
          },
          {
            "name": "Lightest",
            "hsl": "hsl(199, 92%, 68%)",
            "h": 199,
            "s": 92,
            "l": 68
          },
          {
            "name": "DeepLight",
            "hsl": "hsl(199, 92%, 81%)",
            "h": 199,
            "s": 92,
            "l": 81
          }
        ]
      },
      {
        "name": "secondary",
        "hue": 214,
        "saturation": 52,
        "colors": [
          {
            "name": "DeepDark",
            "hsl": "hsl(214, 52%, 20%)",
            "h": 214,
            "s": 52,
            "l": 20
          },
          {
            "name": "Darkest",
            "hsl": "hsl(214, 52%, 27%)",
            "h": 214,
            "s": 52,
            "l": 27
          },
          {
            "name": "Darker",
            "hsl": "hsl(214, 52%, 40%)",
            "h": 214,
            "s": 52,
            "l": 40
          },
          {
            "name": "Dark",
            "hsl": "hsl(214, 52%, 49%)",
            "h": 214,
            "s": 52,
            "l": 49
          },
          {
            "name": "Normal",
            "hsl": "hsl(214, 52%, 56%)",
            "h": 214,
            "s": 52,
            "l": 56
          },
          {
            "name": "Light",
            "hsl": "hsl(214, 52%, 65%)",
            "h": 214,
            "s": 52,
            "l": 65
          },
          {
            "name": "Lighter",
            "hsl": "hsl(214, 52%, 71%)",
            "h": 214,
            "s": 52,
            "l": 71
          },
          {
            "name": "Lightest",
            "hsl": "hsl(214, 52%, 83%)",
            "h": 214,
            "s": 52,
            "l": 83
          },
          {
            "name": "DeepLight",
            "hsl": "hsl(214, 52%, 90%)",
            "h": 214,
            "s": 52,
            "l": 90
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
            "hsl": "hsl(0, 0%, 7%)",
            "h": 0,
            "s": 0,
            "l": 7
          },
          {
            "name": "Darkest",
            "hsl": "hsl(0, 0%, 11%)",
            "h": 0,
            "s": 0,
            "l": 11
          },
          {
            "name": "Darker",
            "hsl": "hsl(0, 0%, 13%)",
            "h": 0,
            "s": 0,
            "l": 13
          },
          {
            "name": "Dark",
            "hsl": "hsl(0, 0%, 19%)",
            "h": 0,
            "s": 0,
            "l": 19
          },
          {
            "name": "Normal",
            "hsl": "hsl(0, 0%, 0%)",
            "h": 0,
            "s": 0,
            "l": 0
          },
          {
            "name": "Light",
            "hsl": "hsl(0, 0%, 34%)",
            "h": 0,
            "s": 0,
            "l": 34
          },
          {
            "name": "Lighter",
            "hsl": "hsl(0, 0%, 46%)",
            "h": 0,
            "s": 0,
            "l": 46
          },
          {
            "name": "Lightest",
            "hsl": "hsl(0, 0%, 64%)",
            "h": 0,
            "s": 0,
            "l": 64
          },
          {
            "name": "DeepLight",
            "hsl": "hsl(0, 0%, 95%)",
            "h": 0,
            "s": 0,
            "l": 95
          }
        ]
      },
      {
        "name": "background",
        "hue": 190,
        "saturation": 83,
        "colors": [
          {
            "name": "DeepDark",
            "hsl": "hsl(190, 83%, 10%)",
            "h": 190,
            "s": 83,
            "l": 10
          },
          {
            "name": "Darkest",
            "hsl": "hsl(190, 83%, 21.125%)",
            "h": 190,
            "s": 83,
            "l": 21.125
          },
          {
            "name": "Darker",
            "hsl": "hsl(190, 83%, 32.25%)",
            "h": 190,
            "s": 83,
            "l": 32.25
          },
          {
            "name": "Dark",
            "hsl": "hsl(190, 83%, 43.375%)",
            "h": 190,
            "s": 83,
            "l": 43.375
          },
          {
            "name": "Normal",
            "hsl": "hsl(190, 83%, 54.5%)",
            "h": 190,
            "s": 83,
            "l": 54.5
          },
          {
            "name": "Light",
            "hsl": "hsl(190, 83%, 65.625%)",
            "h": 190,
            "s": 83,
            "l": 65.625
          },
          {
            "name": "Lighter",
            "hsl": "hsl(190, 83%, 76.75%)",
            "h": 190,
            "s": 83,
            "l": 76.75
          },
          {
            "name": "Lightest",
            "hsl": "hsl(190, 83%, 87.875%)",
            "h": 190,
            "s": 83,
            "l": 87.875
          },
          {
            "name": "DeepLight",
            "hsl": "hsl(190, 83%, 99%)",
            "h": 190,
            "s": 83,
            "l": 99
          }
        ]
      }
    ],
    "typography": [
      {
        "name": "fontFamily",
        "value": "sohne, Helvetica Neue, Helvetica, Arial, sans-serif"
      },
      {
        "name": "fontSize",
        "value": "16px"
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
  export const skyBlue: Theme = JSON.parse(jsonTheme);
