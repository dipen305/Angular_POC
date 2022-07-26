import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})

export class ParentComponent implements OnInit {
  userData:any;
  constructor() { }

  ngOnInit(): void {

  }
  addClick(event:Event){
    this.userData=event;
  }
}
