import { Component, Input, OnInit } from '@angular/core';
import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-second-child',
  templateUrl: './second-child.component.html',
  styleUrls: ['./second-child.component.scss']
})
export class SecondChildComponent implements OnInit {
@Input() userData:any;
  constructor(public userDataService:UserDataService) { }

  ngOnInit(): void {
  }

}
