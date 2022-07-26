import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  userEmail!:string;
  userPassword!:string;
  constructor(private router:Router, private authService:AuthService) { }

  ngOnInit(): void {
  }

  onSignIn(){
    if(this.userEmail==='admin@gmail.com' && this.userPassword ==='admin'){
      alert('Login Successfull');
      this.authService.setUserStatus(true);
      this.router.navigate(['/home']);
    }
  }
}
