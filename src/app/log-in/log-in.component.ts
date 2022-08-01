import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  isLoginMode = true;
  isUserLoggedIn = false;
  userEmail!:string;
  userPassword!:string;
  constructor(private router:Router, private authService:AuthService) { }

  ngOnInit(): void {
  }

  onSignIn(){
    this.isLoginMode = true;
    
    if(this.userEmail==='admin@gmail.com' && this.userPassword ==='admin123'){
      alert('Login Successfull');
      this.authService.setUserStatus(true);
      this.router.navigate(['/home']);
      this.isUserLoggedIn = true;
    }
    else if(!this.isUserLoggedIn){
      console.log('need to call signup API');
    }
    else {
      alert('Incorrect email id and password');
    }
  }
  onSignUp(){
    this.authService.signUp(this.userEmail,this.userPassword);
    this.isLoginMode = false;
  }
}
