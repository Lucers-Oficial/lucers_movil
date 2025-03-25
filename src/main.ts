import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)), provideFirebaseApp(() => initializeApp({ projectId: "fir-e441d", appId: "1:863021802362:web:6f88b76d66ce67c10a2cc3", storageBucket: "fir-e441d.firebasestorage.app", apiKey: "AIzaSyB0FbOvB7elwp0mb-BLCMXuiGzYhoJPuTk", authDomain: "fir-e441d.firebaseapp.com", messagingSenderId: "863021802362" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()),
  ],
});
