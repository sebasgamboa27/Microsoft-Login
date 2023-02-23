import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  user = {'email':'gamboasebas@gmail.com','password':'hola'}

  constructor() { }

  enterUser(email:string,password:string){
    let user ={'email':email,'password':password}
    this.user = user;
  }

  getUser(email:string,password:string){
    if (this.user.email== email && this.user.password == password){
      return true;
    }
    return false;
  }
}
