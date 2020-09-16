import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})

export class ToolbarComponent implements OnInit {


  constructor(private router:Router,private cookie:CookieService) { }

  ngOnInit() {
  }
  returnHomepage(){
    this.router.navigate(['homepage']);
  }
  async signout(){
    await this.cookie.deleteAll();
    this.router.navigate(['user/login']);
    
  }
}
