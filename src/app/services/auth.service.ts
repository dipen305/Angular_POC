import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isUserAuthenticated = false;

  constructor(private http:HttpClient) { }

  setUserStatus(userStatus: boolean) {
    this.isUserAuthenticated = userStatus;
  }
  getUserStatus() {
    return this.isUserAuthenticated;
  }

  signUp(email:string,password:string){
    const headers = new HttpHeaders({'Content-Type':'application/json','content-type':'application/json','Custom-Header':'Demo Header','Access-Control-Allow-Origin':'*'});
    this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC__Cek-E3W8ysdxyDAk1I0zyc2FAoNHig',
    {
      'email':email,
      'password':password,
      'returnSecureToken':true
    }, {headers:headers}).subscribe(res=>{
      console.log('auth response',res);
    })
  }
}
