import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';


import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { NoteService } from './services/note.service';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { NotesComponent } from './notes/notes.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AuthorizationService } from './services/authorization.service';
import { AuthorizationGuardService } from './guards/authorization-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotesComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    AngularFireDatabaseModule
  ],
  providers: [
    NoteService,
    AuthorizationService,
    AuthorizationGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
