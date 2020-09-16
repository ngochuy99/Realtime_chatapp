import { Injectable } from '@angular/core';
import io from 'socket.io-client';
import { environment } from 'src/environments/environment';
import { RoomApiService } from '../services/room-api.service';
import {Observable, Observer} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketioService {
  socket;
  constructor(private room_service:RoomApiService) {
    this.socket = io.connect(environment.SOCKET_ENDPOINT);
   }
  // setupSocketConnection(){ //init connection
  //   this.socket=io.connect(environment.SOCKET_ENDPOINT);
  // }
  create_room(room:string,password:string,uid){ //Create new room
    this.socket.emit('create_room',room,password,uid);
  }
  join_room(room:string,password:string,uid){
    this.socket.emit('join_room',room,password,uid);
  }
  public UpdateAttendance = () => {
    return new Observable((observer: Observer<any>) => {
        this.socket.on('update_attendance', (data) => {
            observer.next(data);
        });
    });
}
}
