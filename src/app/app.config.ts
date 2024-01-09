import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app-routing.module';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';

import { fireBaseConfig } from '../environments/environment';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(), 
    importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"multichatroom","appId":"1:263666048449:web:11357a94caa6b262e0e340","storageBucket":"multichatroom.appspot.com","apiKey":"AIzaSyAPPD1A5nSQIYfcryFr36_OSAhDotg8fIs","authDomain":"multichatroom.firebaseapp.com","messagingSenderId":"263666048449","measurementId":"G-9EWT98NRK2"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore())),
    importProvidersFrom(provideDatabase(() => getDatabase())),
    // TO PREVENT NULLINJECTION SERVICE: ERROR Error [NullInjectorError]: R3InjectorError(Standalone[_TestComponent])[_AuthenticationService ->
    // ADD THIS
    { provide: FIREBASE_OPTIONS, useValue: fireBaseConfig.firebase },
  ]
};
