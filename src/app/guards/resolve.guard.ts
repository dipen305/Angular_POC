import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { UserDataService } from '../services/user-data.service';

@Injectable({
  providedIn: 'root'
})
export class ResolveGuard implements Resolve<any> {
  data:any;
  constructor(private userService:UserDataService,private http:HttpClient) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log(route.queryParams['id'])
    let id = route.queryParams['id'];
    let data = this.userService.get('./assets/json/userData.json');
    console.log('Data Loaded from Resolver',data);
    return  data;
  }
}
