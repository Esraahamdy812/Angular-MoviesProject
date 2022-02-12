import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasswordComponent } from './password/password.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:'' , component:ProfileComponent},
  {path:'password' , component:PasswordComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
