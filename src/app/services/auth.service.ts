import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isUserAuthenticated = false;

  constructor() { }

  setUserStatus(userStatus: boolean) {
    this.isUserAuthenticated = userStatus;
  }
  getUserStatus() {
    return this.isUserAuthenticated;
  }
}
