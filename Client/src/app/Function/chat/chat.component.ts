import { Component, OnInit ,Inject} from '@angular/core';
import { SocketioService } from 'src/app/services/socketio.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CreateRoomDialogComponent } from 'src/app/Modals/create-room-dialog/create-room-dialog.component';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  constructor(private socketService:SocketioService,public dialog: MatDialog, private cookie:CookieService) { }
  room:string;
  ngOnInit() {
    this.socketService.setupSocketConnection();
  }
  Create_room():void{
    const dialogRef = this.dialog.open(CreateRoomDialogComponent,{
      width: '250px',
      data:{
        name:this.cookie.get('username'),
      }
    });
    dialogRef.afterClosed().subscribe((result:any)=>{
        this.socketService.create_room(result.room,result.password);
    })
  }
}