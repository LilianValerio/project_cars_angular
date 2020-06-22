import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { RegisterComponent } from './register/register.component';
import { MeComponent } from './me/me.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'list-users', component: ListUsersComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'me', component: MeComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },

];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})

export class AppRoutingModule { }