import { Injectable } from '@angular/core';
import io from 'socket.io-client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocketioService {
  socket;
  constructor() { }
  setupSocketConnection(){ //init connection
    this.socket=io.connect(environment.SOCKET_ENDPOINT);
  }
  create_room(room:string,password:string,uid){ //Create new room
    this.socket.emit('create_room',room,password,uid);
  }
}
