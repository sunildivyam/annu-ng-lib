import { DocsData } from '../../docs/docs.interface';
const guardInfo = {
    "name": "IsLoggedInGuard",
    "description": "",
    "tsUrl": "projects/annu-ng-lib/src/lib/services/route-guards/is-logged-in.guard.ts",
    "tsSource": "import { Injectable } from '@angular/core';\r\nimport {\r\n  CanActivate,\r\n  ActivatedRouteSnapshot,\r\n  RouterStateSnapshot,\r\n  Router,\r\n  CanActivateChild,\r\n  UrlTree\r\n} from '@angular/router';\r\nimport { AuthFirebaseService } from '../../firebase/auth/auth-firebase.service';\r\n\r\n\r\n@Injectable()\r\nexport class IsLoggedInGuard implements CanActivate, CanActivateChild {\r\n\r\n  constructor(private authFireSvc: AuthFirebaseService,\r\n    private router: Router) { }\r\n\r\n  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean | UrlTree> {\r\n    const loginUrl = route?.data['loginUrl'] || '/login';\r\n    const urlTree = this.router.parseUrl(`${loginUrl}?returnUrl=${state.url}`);\r\n    return this.checkUserLoggedIn(urlTree);\r\n  }\r\n\r\n  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean | UrlTree> {\r\n    const loginUrl = route?.data['loginUrl'] || '/login';\r\n    const urlTree = this.router.parseUrl(`${loginUrl}?returnUrl=${state.url}`);\r\n    return this.checkUserLoggedIn(urlTree);\r\n  }\r\n\r\n  public checkUserLoggedIn(urlTree: UrlTree): Promise<boolean | UrlTree> {\r\n    return new Promise((resolve, reject) => {\r\n      if (this.authFireSvc.isLoggedIn()) {\r\n        resolve(true);\r\n      } else if(!this.authFireSvc.isLoggedInFromLocalStorage()) {\r\n        resolve(urlTree);\r\n      } else {\r\n        this.authFireSvc.authStateChanged().subscribe(user => {\r\n          if (user) {\r\n            resolve(true);\r\n          } else {\r\n            resolve(urlTree);\r\n          }\r\n        })\r\n      }\r\n    })\r\n  }\r\n}\r\n",
    "inputProps": [],
    "outputProps": [],
    "props": [],
    "methods": [
        {
            "name": "canActivate",
            "returnType": "Promise<boolean | UrlTree>",
            "args": [
                {
                    "name": "route",
                    "type": "ActivatedRouteSnapshot",
                    "deprecated": false,
                    "deprecationMessage": ""
                },
                {
                    "name": "state",
                    "type": "RouterStateSnapshot",
                    "deprecated": false,
                    "deprecationMessage": ""
                }
            ],
            "deprecated": "",
            "deprecationMessage": "",
            "description": ""
        },
        {
            "name": "canActivateChild",
            "returnType": "Promise<boolean | UrlTree>",
            "args": [
                {
                    "name": "route",
                    "type": "ActivatedRouteSnapshot",
                    "deprecated": false,
                    "deprecationMessage": ""
                },
                {
                    "name": "state",
                    "type": "RouterStateSnapshot",
                    "deprecated": false,
                    "deprecationMessage": ""
                }
            ],
            "deprecated": "",
            "deprecationMessage": "",
            "description": ""
        },
        {
            "name": "checkUserLoggedIn",
            "returnType": "Promise<boolean | UrlTree>",
            "args": [
                {
                    "name": "urlTree",
                    "type": "UrlTree",
                    "deprecated": false,
                    "deprecationMessage": ""
                }
            ],
            "deprecated": "",
            "deprecationMessage": "",
            "description": "",
            "accessModifier": "public"
        }
    ]
};

export const GuardInfoComponent: DocsData = {
    projectionContent: '',
    inputPropsValues: {
        guardInfo
    }
}
