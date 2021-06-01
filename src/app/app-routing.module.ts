import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/homepage/home/home.component';
import { ProfilesComponent } from './views/homepage/profiles/profiles.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'profiles', component: ProfilesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
