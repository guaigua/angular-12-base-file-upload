import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { ProfilesComponent } from './profiles/profiles.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload';



@NgModule({
  declarations: [
    HomeComponent,
    ProfilesComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FileUploadModule
  ]
})
export class HomepageModule { }
