import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CanComponentDeactivate } from '../guards/can-deactivate.guard';
import { userDataModel } from '../models/userData.model';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-first-child',
  templateUrl: './first-child.component.html',
  styleUrls: ['./first-child.component.scss']
})

export class FirstChildComponent implements OnInit {
  @Output() addclick: EventEmitter<any> = new EventEmitter();
  userName!: string;
  age!: number
  dob: any;
  userData: any = [];
  routeData:any;
  constructor(private userDataService: UserDataService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.routeData =  this.route.snapshot.data['test'];
    this.route.queryParams.subscribe((data:any)=>{
      console.log(data);
    })
    console.log(this.route.snapshot.queryParams['id']);
    console.log(this.routeData);
  }
  addClick() {
    
    let obj = new userDataModel(this.userName, this.age, this.dob)
    this.userData.push(obj);
    this.userDataService.userData.push(obj);
    this.addclick.emit(this.userData);
  }
  onChildRoutes(){
    console.log(this.route);
    // this.router.navigate(['/first-child',10],{ relativeTo:this.route})
    this.router.navigate(['first-child',10],{queryParams:{id:10,name:'Dipen'}})
  }

  
}
