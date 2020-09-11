import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoomApiService {

  constructor(private http : HttpClient) { }
  get_room_list(){
    return this.http.get(environment.root_url + '/room/listroom');
  }
}
