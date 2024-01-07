// app.module.ts
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TestComponent } from '../app/components/test/test.component'
//import { AngularFireStorageModule } from '@angular/fire/compat/storage';
//import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { HttpClientModule } from '@angular/common/http';


import { fireBaseConfig } from '../environments/environment';
import { AuthenticationService} from './services/auth.service'

import {LocalStorageService, SessionStorageService, NgxWebstorageModule} from 'ngx-webstorage';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { provideAuth, getAuth } from '@angular/fire/auth'
import { initializeApp, provideFirebaseApp } from '@angular/fire/app'
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
//import { AngularFirestoreModule } from '@angular/fire/compat/firestore/'; 
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { SETTINGS as AUTH_SETTINGS } from '@angular/fire/compat/auth';
import { CommonModule } from '@angular/common';

//---------
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AppRoutingModule } from './app-routing.module';

//---------

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,  
  ],
  imports: [
    BrowserModule,
    
    //AngularFireModule.initializeApp( fireBaseConfig.firebase ),
    //provideFirebaseApp( () => initializeApp( fireBaseConfig.firebase ) ),
    //provideAuth( () => getAuth() ),
    //provideFirestore(() => getFirestore()),
    //provideFunctions(() => getFunctions(initializeApp( fireBaseConfig.firebase),'europe-west3')),

    //AngularFireStorageModule,
    //AngularFireDatabaseModule,
    //AngularFireAuthModule
    AngularFirestoreModule,
    provideFirebaseApp(() => initializeApp( fireBaseConfig.firebase )),
    provideAuth(() => getAuth()),

    //AngularFireDatabaseModule,
    //AngularFireModule.initializeApp(fireBaseConfig.firebase),
   
    AngularFirestoreModule.enablePersistence(),
    AngularFireStorageModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [],
  providers: [ AuthenticationService, AppRoutingModule,
    { provide: AUTH_SETTINGS, useValue: { appVerificationDisabledForTesting: true } },
    { provide: FIREBASE_OPTIONS, useValue: fireBaseConfig.firebase }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {  }

