import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() email : string | undefined;
  @Input() password : string | undefined;
  showPassword: boolean = false;

  twofactor: boolean = false;

  resetPassword: boolean = false;
  twofactorReady: boolean = false;

  register: boolean = false;

  constructor(private user: UsersService,private router: Router) { }

  ngOnInit(): void {
  }

  nextPressed(){
    if(this.email != undefined && this.password == undefined){
      this.showPassword = true;
    }
    if(this.email != undefined && this.password != undefined){
      console.log('login')
      if(this.user.getUser(this.email,this.password)){
        this.router.navigate(['home']);
      }
      else{
        alert('Email or password incorrect, try again.')
      }
    }
  }

  twofactorenter(){
    this.twofactor = !this.twofactor;
  }

  sendCode(){
    if(this.email != undefined){
      alert(`Code sent to ${this.email}`);
    }
    else{
      alert('Enter valid email for code to be sent.')
    }
  }

  resetPasswordMethod(){
    if(this.email != undefined){
      this.resetPassword = !this.resetPassword;
    }
    else{
      alert('Enter a valid email for password change');
    }
  }

  changePassword(){
    if(this.password != undefined){
      this.user.user.password = this.password;
      alert('Password changed succesfully')
      this.resetPassword = !this.resetPassword;
      this.email = undefined;
      this.password = undefined;
      this.router.navigate(['']);

    }
    else{
      alert('Enter valid password')
    }
  }

  createUser(){
    this.register = !this.register;
  }

  nextRegister(){
    if(this.email != undefined && this.password == undefined){
      this.showPassword = true;
    }
    if(this.email != undefined && this.password != undefined){
      console.log('register')
      this.user.enterUser(this.email,this.password);
      this.user.user.email = this.email;
      this.user.user.password = this.password;
      alert('User created succesfully');
      this.router.navigate(['home']);
    }
  }

}
