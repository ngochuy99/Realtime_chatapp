import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class RoomApiService {

  constructor(private http : HttpClient,private cookie:CookieService) { }
  get_room_list(){
    return this.http.get(environment.root_url + '/room/listroom',{headers:{'token':this.cookie.get('accessToken')}});
  }
  get_attendance(room_name){
    return this.http.post(environment.root_url + '/room/attendances',{room_name:room_name},{headers:{'token':this.cookie.get('accessToken')}});
  }
}
