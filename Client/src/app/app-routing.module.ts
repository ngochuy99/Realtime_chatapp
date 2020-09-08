import { NgModule } from '@angular/core';
import { Routes, RouterModule ,CanActivate} from '@angular/router';
import { LoginComponent } from './User/login/login.component';
import { RegisterComponent }  from './User/register/register.component';
import { AppComponent } from './app.component';
import { AuthGuardService} from './Auth/auth-guard.service';
import { HomepageComponent} from './Component/homepage/homepage.component';
import { from } from 'rxjs';
import { ToolbarComponent } from './Component/toolbar/toolbar.component';
import { ChatComponent} from './Function/chat/chat.component';
const routes: Routes = [
  {
    path: 'user/login',
    component: LoginComponent
  },
  {
    path: 'user/register',
    component: RegisterComponent,
  },
  {
    path: '',
    component:ToolbarComponent,
    children:[
      {path:'homepage',component:HomepageComponent},
      {path:'service/chat',component:ChatComponent}
    ]
    // canActivate: [AuthGuardService]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
