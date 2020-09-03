import { NgModule } from '@angular/core';
import { Routes, RouterModule ,CanActivate} from '@angular/router';
import { LoginComponent } from './User/login/login.component';
import { RegisterComponent }  from './User/register/register.component';
import { AppComponent } from './app.component';
import { AuthGuardService} from './Auth/auth-guard.service';

const routes: Routes = [
  {
    path: 'user/login',
    component: LoginComponent
  },
  {
    path: 'user/register',
    component: RegisterComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: '',
    component:AppComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
