import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './shared/modules/material/material.module';
import { FileDropDirective, FileSelectDirective, FileUploadModule } from "ng2-file-upload";
import { HomeComponent } from './views/homepage/home/home.component';
import { ProfilesComponent } from './views/homepage/profiles/profiles.component';
import { HomepageModule } from './views/homepage/homepage.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HomepageModule,    
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FileUploadModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
