const functions = require("firebase-functions");
const universal = require('./dist/annu-ng-lib-pages/server/main');
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.ssrAppFn = functions.https.onRequest(universal.app());
