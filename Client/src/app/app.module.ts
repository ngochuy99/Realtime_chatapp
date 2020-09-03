import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './User/login/login.component';
import { RegisterComponent } from './User/register/register.component';
import { ReactiveFormsModule , FormsModule} from '@angular/forms';
<<<<<<< HEAD
import { CookieService} from 'ngx-cookie-service';

=======
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ToolbarComponent } from './Component/toolbar/toolbar.component'
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule} from '@angular/material/list'
import { MatCheckboxModule} from '@angular/material/checkbox';
import { fromEventPattern } from 'rxjs';
>>>>>>> origin/Chat_app_v082020
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ToolbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
<<<<<<< HEAD
=======
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatCheckboxModule
>>>>>>> origin/Chat_app_v082020
  ],
  providers: [ CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
