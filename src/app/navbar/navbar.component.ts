import { Router } from '@angular/router';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  indicatorShow: boolean = false;
  indicatorColor: string = '#f00';
  indicatorMessage: string = '';
  smileOrSad = false;
  isLogin: boolean = false;
  user:any = {};
  constructor(private UserService: UserService,private Router:Router) { }
  callLogout(){
    this.UserService.loginData.next(null);
  localStorage.removeItem('userToken');
  this.Router.navigate(['/login']);

  }
  ngOnInit(): void {
    this.UserService.loginData.subscribe(() => {
      this.user = this.UserService.loginData.getValue();
      if (this.UserService.loginData.getValue() == null) {
        this.isLogin = false;
      }
      else {
        this.isLogin = true;
      }
    })

    
  }

}



