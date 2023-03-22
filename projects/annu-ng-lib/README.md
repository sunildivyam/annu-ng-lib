# @annubiz/ng-lib

The objective of this project to develop a framework that can provide all required bolts and nuts to retail requirements, for example: Hiring and Jobs Retail Shopping and e-commerce Tour, Travel & hotels Web classifieds, etc.

### How this is enabled:
* One `index.ts` file is created in `projects/annu-ng-lib/src/lib` and exported all library angular items that need to be exposed publically.
* `public-api.ts` needs to export all from this `index.ts`.
* The last thing is to add `paths` to the root `tsconfig.base.json` to point to this `index.ts`.
* This is all, now you just need to import library in your main app module.

## Build Library

Run `ng build annu-ng-lib` to build the project. The build artifacts will be stored in the `dist/annu-ng-lib` directory. Use the `--prod` flag for a production build.

## Generate alternate & optional Library documentation static site.
* Run `npm run docs`, will create a `documentation` folder in root, that contains all static documentation code.
* Run `npm run docs:serve`, will start a local static web server at http://localhost:8080 that will serve the static library documentation.
* This documentation support can be removed later once pages app is completed.
