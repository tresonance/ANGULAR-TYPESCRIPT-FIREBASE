export const environment = {
  production: true,
    firebase: {
      apiKey: "API_KEY",
      authDomain: "DOMAIN",
      projectId: "ID",
      storageBucket: "BUCKET",
      messagingSenderId: "SENDER_ID",
      appId: "API_ID",
      measurementId: "MEASUREMENT"
    }
};


// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

/*export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCmowOH8iFVkwCH9q2D9fnfBoOyCkA0Ra0',
    authDomain: 'edushare-9c15b.firebaseapp.com',
    databaseURL: 'https://edushare-9c15b.firebaseio.com',
    projectId: 'edushare-9c15b',
    storageBucket: 'edushare-9c15b.appspot.com',
    messagingSenderId: '103007782343'
  },

}; */


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const fireBaseConfig = {
  production: true,
  firebase :{
    apiKey: "AIzaSyB42N6fI6gKXoN-i8JC38gI7y41YaPrnK4",
    authDomain: "angular-project-477f8.firebaseapp.com",
    projectId: "angular-project-477f8",
    storageBucket: "angular-project-477f8.appspot.com",
    messagingSenderId: "816483532845",
    appId: "1:816483532845:web:fce15029bd0986ba9eb8a4",
    measurementId: "G-GD10F83XMM"
  }
};

// Initialize Firebase
//const app = initializeApp(fireBaseConfig);
//const analytics = getAnalytics(app);

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

