// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

/*export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyArSi0xXCNPlXHZEOpF84_-MLlh7evlkL4",
    authDomain: "multichatroomproject.firebaseapp.com",
    projectId: "multichatroomproject",
    storageBucket: "multichatroomproject.appspot.com",
    messagingSenderId: "503792561632",
    appId: "1:503792561632:web:90829a2360dbae6efc0f85",
    measurementId: "G-MXM5J3Y82S"
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
  production: false,
  firebase: {
    apiKey: "AIzaSyAPPD1A5nSQIYfcryFr36_OSAhDotg8fIs",
    authDomain: "multichatroom.firebaseapp.com",
    projectId: "multichatroom",
    storageBucket: "multichatroom.appspot.com",
    messagingSenderId: "263666048449",
    appId: "1:263666048449:web:11357a94caa6b262e0e340",
    measurementId: "G-9EWT98NRK2"
  }
};

// Initialize Firebase
//const firebase = initializeApp(environment);
//const analytics = getAnalytics(app);

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
