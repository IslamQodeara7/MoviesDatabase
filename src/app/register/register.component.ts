import { UserService } from './../user.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor(private UserService:UserService, private Router:Router) { }
  registerForm: FormGroup = new FormGroup({
    first_name: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(15)
      , Validators.pattern(/^[a-zA-Z]{5,15}$/)]),
    last_name: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(15)
      , Validators.pattern(/^[a-zA-Z]{5,15}$/)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(15)
      , Validators.pattern(/^[a-zA-Z0-9]{8,15}$/)]),
    age: new FormControl(null, [Validators.required, Validators.min(16), Validators.max(60)]),
  });
  indicatorShow: boolean = false;
  indicatorColor: string = '#f00';
  indicatorMessage: string = '';
  firstNameValue:string='';
  lastNameValue:string='';
  emailValue:string='';
  passwordValue:string='';
  ageValue:string='';
  smileOrSad = false;
  passwordType:string='password';
  eyeColor:string='#14213d';
  showPassword(){
    if(this.passwordType=='password'&&this.eyeColor=='#14213d'){
      this.passwordType='text';
      this.eyeColor='#fca311';
    }
    else{
      this.passwordType='password';
      this.eyeColor='#14213d';
    }
  }
  getRegisterForm(form: FormGroup) {
    if (form.get('first_name')?.errors) {
      this.indicatorShow = true;
      this.indicatorColor = 'red';
      this.smileOrSad = false;
      if (form.get('first_name')?.errors?.['required']) {
        this.indicatorMessage = 'first name is required';
      }
      else if (form.get('first_name')?.errors?.['minlength']) {
        this.indicatorMessage = 'first name should contain 5 characters as minimum length'
      }
      else if (form.get('first_name')?.errors?.['maxlength']) {
        this.indicatorMessage = `
        first name should contain 15 characters as maximum length 
        `
      }
      else if (form.get('first_name')?.errors?.['pattern']) {
        this.indicatorMessage = `first name should contain alphapetical characters only 
        `
      }
    }
    else if (form.get('last_name')?.errors) {
      this.indicatorShow = true;
      this.indicatorColor = '#f00';
      this.smileOrSad = false;
      if (form.get('last_name')?.errors?.['required']) {
        this.indicatorMessage = 'last name is required';
      }
      else if (form.get('last_name')?.errors?.['minlength']) {
        this.indicatorMessage = 'last name should contain 5 characters as minimum length'
      }
      else if (form.get('last_name')?.errors?.['maxlength']) {
        this.indicatorMessage = `
        last name should contain 15 characters as maximum length 
        `
      }
      else if (form.get('last_name')?.errors?.['pattern']) {
        this.indicatorMessage = `last name should contain alphapetical characters only 
        `
      }
    }
    else if (form.get('email')?.errors) {
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
    else if(form.get('password')?.errors){
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
    else if(form.get('age')?.errors){
      this.indicatorShow = true;
      this.indicatorColor = '#f00';
      this.smileOrSad = false;
      if (form.get('age')?.errors?.['required']) {
        this.indicatorMessage = 'age is required';
      }
      else if (form.get('age')?.errors?.['min']) {
        this.indicatorMessage ='age should be 16 yrs as minimum';
      }
      else if (form.get('age')?.errors?.['max']) {
        this.indicatorMessage = 'age should be 60 yrs as maximum';
      }
    }
    else {
      console.log(form.value);
    this.UserService.register(form.value).subscribe((res)=>{
console.log(res);
if(res.errors){
  this.indicatorShow = true;
  this.indicatorColor = '#f00';
  this.smileOrSad = false;
  this.indicatorMessage = res.message;
}
else{
  this.indicatorShow = true;
  this.indicatorColor = '#0f0';
  this.smileOrSad = true;
  this.indicatorMessage = res.message;
  setTimeout(()=>{
    this.Router.navigate(['/login']);
  },3000)
  this.registerForm.reset();
}

    })
      
     
    }
  }
  clearRegisterForm(){
    this.passwordType='password';
    this.eyeColor='#fff';
    this.emailValue='\n';
    this.passwordValue= '\n';
    this.ageValue='\n';
    this.firstNameValue='\n';
    this.lastNameValue='\n';
      }
  ngOnInit(): void {

  }

}


/**
 *    if(form.get('first_name')?.errors&&form.get('first_name')?.touched){
      this.indicatorShow=true;
      this.indicatorColor='red';
      if(form.get('first_name')?.errors?.['required']){
        this.indicatorMessage = 'First Name is required!'
      }
      else if(form.get('first_name')?.errors?.['minLength']){
        this.indicatorMessage='First Name should contain at least 5 characers!';
      }
      else if(form.get('first_name')?.errors?.['maxLength']){
        this.indicatorMessage='First Name should contain 15 characters as maximum!';
      }
      else if(form.get('first_name')?.errors?.['pattern']){
        this.indicatorMessage="First Name should contain alphapetical characters only!";
      }
    }
    else if(form.get('last_name')?.errors){
      this.indicatorShow=true;
      this.indicatorColor='red';
      if(form.get('last_name')?.errors?.['required']){
        this.indicatorMessage = 'Last Name is required!'
      }
      else if(form.get('last_name')?.errors?.['minLength']){
        this.indicatorMessage='Last Name should contain at least 5 characers!';
      }
      else if(form.get('last_name')?.errors?.['maxLength']){
        this.indicatorMessage='Last Name should contain 15 characters as maximum!';
      }
      else if(form.get('last_name')?.errors?.['pattern']){
        this.indicatorMessage="Last Name should contain alphapetical characters only!";
      }
    }
    else if(form.get('email')?.errors){
      this.indicatorShow=true;
      this.indicatorColor='red';
      if(form.get('email')?.errors?.['required']){
        this.indicatorMessage = 'Email is required!'
      }
      else if(form.get('email')?.errors?.['minLength']){
        this.indicatorMessage='Email is invalid!';
      }
    }
    else if(form.get('password')?.errors){
      this.indicatorShow=true;
      this.indicatorColor='red';
      if(form.get('password')?.errors?.['required']){
        this.indicatorMessage = 'Password is required!'
      }
      else if(form.get('password')?.errors?.['minLength']){
        this.indicatorMessage='Password should contain at least 8 characers!';
      }
      else if(form.get('password')?.errors?.['maxLength']){
        this.indicatorMessage='Password should contain 15 characters as maximum!';
      }
      else if(form.get('password')?.errors?.['pattern']){
        this.indicatorMessage="Password should contain alphapetical characters and numbers only!";
      }
    }
    else if(form.get('age')?.errors){
      this.indicatorShow=true;
      this.indicatorColor='red';
      if(form.get('age')?.errors?.['required']){
        this.indicatorMessage = 'Age is required!'
      }
      else if(form.get('age')?.errors?.['min']){
        this.indicatorMessage='Age should be 16 yrs as minimum!';
      }
      else if(form.get('age')?.errors?.['max']){
        this.indicatorMessage='Age should be 60 as maximum!';
      }
    }
    else{
      this.indicatorShow=true;
      this.indicatorColor='green';
      this.indicatorMessage="user registered successfully";
      console.log(form.value);
      

    }
 */