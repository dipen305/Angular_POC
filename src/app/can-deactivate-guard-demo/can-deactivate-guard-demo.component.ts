import { Component, OnInit } from '@angular/core';
import { UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CanComponentDeactivate } from '../guards/can-deactivate.guard';

@Component({
  selector: 'app-can-deactivate-guard-demo',
  templateUrl: './can-deactivate-guard-demo.component.html',
  styleUrls: ['./can-deactivate-guard-demo.component.scss']
})
export class CanDeactivateGuardDemoComponent implements OnInit,CanComponentDeactivate {
  userName!: string;
  age!: number
  constructor() { }

  ngOnInit(): void {
  }
  
  canDeactivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.userName!=null || this.age!=null){
      return confirm('Do you want to discard the changes?').valueOf();
    }else{
      return true;    
    }
  }
}
