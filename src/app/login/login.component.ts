import { Router } from '@angular/router';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import jwtDecode from 'jwt-decode';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  constructor(private UserService: UserService, private Router:Router) {  }
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(15)
      , Validators.pattern(/^[a-zA-Z0-9]{8,15}$/)])
  });
  indicatorShow: boolean = false;
  indicatorColor: string = '#f00';
  indicatorMessage: string = '';
  smileOrSad = false;
  passwordType: string = 'password';
  eyeColor: string = '#14213d';
  emailValue: string = '';
  passwordValue: string = '';
  showPassword() {
    if (this.passwordType == 'password' && this.eyeColor == '#14213d') {
      this.passwordType = 'text';
      this.eyeColor = '#fac311';
    }
    else {
      this.passwordType = 'password';
      this.eyeColor = '#14213d';
    }
  }
  getLoginForm(form: FormGroup) {
    if (form.get('email')?.errors) {
      this.indicatorShow = true;
      this.indicatorColor = '#f00';
      this.smileOrSad = false;
      if (form.get('email')?.errors?.['required']) {
        this.indicatorMessage = 'email is required';
      }
      if (form.get('email')?.errors?.['email']) {

        this.indicatorMessage = 'email is invalid';
      }
    }
    else if (form.get('password')?.errors) {
      this.indicatorShow = true;
      this.indicatorColor = '#f00';
      this.smileOrSad = false;
      if (form.get('password')?.errors?.['required']) {
        this.indicatorMessage = 'password is required';
      }
      else if (form.get('password')?.errors?.['minlength']) {
        this.indicatorMessage = 'password should contain 8 characters as minimum length';
      }
      else if (form.get('password')?.errors?.['maxlength']) {
        this.indicatorMessage = 'password should contain 15 characters as maximum length';
      }
      else if (form.get('password')?.errors?.['pattern']) {
        this.indicatorMessage = 'password should contain characters and numbers only';
      }
    }

    else {
      this.UserService.login(form.value).subscribe((res) => {
console.log(res);
console.log(jwtDecode(res.token));

if(res.message=='success'){
  this.indicatorShow = true;
  this.indicatorColor = '#0f0';
  this.smileOrSad = true;
  this.indicatorMessage = res.message;
  localStorage.setItem('userToken',res.token);

  this.UserService.recoverUserData();
  setTimeout(()=>{
    this.Router.navigate(['/home']);
  },3000)
  this.loginForm.reset();
}
else{
  this.indicatorShow = true;
  this.indicatorColor = '#fac311';
  this.smileOrSad = false;
  this.indicatorMessage = res.message;
}

      })
 
    }
  }

  ngOnInit(): void {
  }

}
