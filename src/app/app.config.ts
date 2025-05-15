import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';


import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideFirebaseApp(() =>
      initializeApp({ 
        projectId: "basketball-league-63073", 
        appId: "1:248200849057:web:e4c4616e2c8dabdce132e0", 
        storageBucket: "basketball-league-63073.firebasestorage.app", 
        apiKey: "AIzaSyCCVvUOW3Rkey6VEy81hDYL-wvpo-2h9Zc", 
        authDomain: "basketball-league-63073.firebaseapp.com", 
        messagingSenderId: "248200849057" })), 
        provideAuth(() => getAuth()), 
        provideFirestore(() => getFirestore())]
};
