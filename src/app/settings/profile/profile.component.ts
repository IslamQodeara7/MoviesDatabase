import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  data:any = null;
  constructor(private UserService:UserService) {

   }

  ngOnInit(): void {
    this.UserService.loginData.subscribe((res: any)=>{
      this.data = res;
      console.log(res);
      
    })
  }

}
