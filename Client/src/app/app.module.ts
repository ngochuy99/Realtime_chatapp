import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './User/login/login.component';
import { RegisterComponent } from './User/register/register.component';
import { ReactiveFormsModule , FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ToolbarComponent } from './Component/toolbar/toolbar.component'
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule} from '@angular/material/list'
import { MatCheckboxModule} from '@angular/material/checkbox';
import { fromEventPattern, from } from 'rxjs';
import { CookieService} from 'ngx-cookie-service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { JwtModule} from '@auth0/angular-jwt';
import { JwtHelperService,JWT_OPTIONS} from '@auth0/angular-jwt';
import { HomepageComponent } from './Component/homepage/homepage.component'
import {MatGridListModule} from '@angular/material/grid-list';
import { ChatComponent } from './Function/chat/chat.component';
import { SocketioService } from './services/socketio.service';
import { MatDialogModule } from '@angular/material/dialog';
import { CreateRoomDialogComponent } from './Modals/create-room-dialog/create-room-dialog.component';
import { MatFormFieldModule} from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { JoinRoomDialogComponent } from './Modals/join-room-dialog/join-room-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ToolbarComponent,
    HomepageComponent,
    ChatComponent,
    CreateRoomDialogComponent,
    JoinRoomDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatCheckboxModule,
    MatSnackBarModule,
    JwtModule,
    MatGridListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule
  ],
  entryComponents: [CreateRoomDialogComponent,JoinRoomDialogComponent],
  providers: [ CookieService,
              { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
              JwtHelperService,
              SocketioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
