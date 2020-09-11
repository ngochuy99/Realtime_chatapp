import { Component, OnInit ,Inject} from '@angular/core';
import { SocketioService } from 'src/app/services/socketio.service';
import { MatDialog} from '@angular/material/dialog';
import { CreateRoomDialogComponent } from 'src/app/Modals/create-room-dialog/create-room-dialog.component';
import { CookieService } from 'ngx-cookie-service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { JoinRoomDialogComponent } from 'src/app/Modals/join-room-dialog/join-room-dialog.component';
import { RoomApiService } from '../../services/room-api.service';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  constructor(private room_service:RoomApiService,private _snack:MatSnackBar,private socketService:SocketioService,public dialog: MatDialog, private cookie:CookieService) { }
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
        this.socketService.create_room(result.room,result.password,this.cookie.get('UID'));
        this.socketService.socket.on('join_success',()=>{
          this._snack.open('Tạo phòng thành công','close',{
            duration:3000
          })
        })
        this.socketService.socket.on('alr_exist',()=>{
          this._snack.open('Phòng đã tồn tại ','close',{
            duration:3000
          })
        })
    })
  }
  Join_Room(){
    this.room_service.get_room_list().subscribe((room_data:any)=>{
      const diaglogRef = this.dialog.open(JoinRoomDialogComponent,{
        width:'300px',
        data:{
          name:this.cookie.get('username'),
          roomlist:room_data.roomlist
        }
      });
    });

  }
}