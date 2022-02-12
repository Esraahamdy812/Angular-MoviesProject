import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { MoviesComponent } from './movies/movies.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'', redirectTo:'home' , pathMatch:'full'},
  {path:'home' , canActivate:[AuthGuard], component:HomeComponent},
  {path:'about' , canActivate:[AuthGuard], component:AboutComponent},
  {path:'contacts' , canActivate:[AuthGuard], component:ContactsComponent},
  {path:'login' , component:LoginComponent},
  {path:'register' , component:RegisterComponent},
  {path:'movies' ,  canActivate:[AuthGuard],component:MoviesComponent},
  {path:'moviesdetails/:id' , canActivate:[AuthGuard], component:MoviedetailsComponent},
  {path:'settings',loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)},
  {path:'**' , component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
