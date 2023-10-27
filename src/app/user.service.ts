import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, from, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {


  loginData: any = new BehaviorSubject(null);
  recoverUserData() {
    this.loginData.next(jwtDecode(JSON.stringify(localStorage.getItem('userToken'))));
    console.log(this.loginData.getValue());

  }
  constructor(private httpClient: HttpClient,private Router:Router) {
    if(localStorage.getItem('userToken')!=null){
      this.recoverUserData();
      this.Router.navigate(['/home']);
    }
   }
  register(form: object): Observable<any> {

    return this.httpClient.post(`https://movies-api.routemisr.com/signup`, form);

  }

  login(form: object): Observable<any> {
    return this.httpClient.post('https://movies-api.routemisr.com/signin', form);
  }

 
}
