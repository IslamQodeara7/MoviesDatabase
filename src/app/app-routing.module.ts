import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TvComponent } from './tv/tv.component';
import { MovieComponent } from './movie/movie.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginGuard } from './login.guard';
import { RegisterComponent } from './register/register.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { TvShowDetailsComponent } from './tv-show-details/tv-show-details.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'home',canActivate:[LoginGuard],component:HomeComponent},
  {path:'tv',canActivate:[LoginGuard],component:TvComponent},
  {path:'movies',canActivate:[LoginGuard],component:MovieComponent},
  {path:'settings',canActivate:[LoginGuard],loadChildren:()=> import('./settings/settings.module').then((x)=> x.SettingsModule)},
  {path:'movie-details/:x',canActivate:[LoginGuard],component:MovieDetailsComponent},
  {path:'tvshow-details/:x',canActivate:[LoginGuard],component:TvShowDetailsComponent},
  {path:'person-details/:x',canActivate:[LoginGuard],component:PersonDetailsComponent},
  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
