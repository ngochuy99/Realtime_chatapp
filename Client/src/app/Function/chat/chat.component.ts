import { Component, OnInit } from '@angular/core';
import { SocketioService } from 'src/app/services/socketio.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  title="socket_angular";
  constructor(private socketService:SocketioService) { }

  ngOnInit() {
    this.socketService.setupSocketConnection();
  }

}
