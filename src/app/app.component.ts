import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private authService: AuthService, private router: Router) { }
  title = 'Angular_POC';
  onLogin() {
  this.router.navigate(['/sign-in']);
  }
  onLogOut() {
    if (confirm('are you sure you want to logOut').valueOf()) {
      //this.authService.setUserStatus(false);
      this.router.navigate(['/home']);
    }

  }
}
