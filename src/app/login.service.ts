import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor() { }
  isValidUser: boolean = false;

  validateUser(username: string, password: string): boolean {
    if (username === 'admin' && password === 'password') {
      this.isValidUser = true;
      return true;
    } else {
        this.isValidUser = false;
        return false;
    }
  }
}

