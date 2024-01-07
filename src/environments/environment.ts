
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
      apiKey: "API_KEY",
      authDomain: "DOMAIN",
      projectId: "ID",
      storageBucket: "BUCKET",
      messagingSenderId: "SENDER_ID",
      appId: "API_ID",
      measurementId: "MEASUREMENT"
  }
};

// Initialize Firebase
//const firebase = initializeApp(environment);
//const analytics = getAnalytics(app);