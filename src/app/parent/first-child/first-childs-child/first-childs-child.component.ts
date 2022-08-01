import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-first-childs-child',
  templateUrl: './first-childs-child.component.html',
  styleUrls: ['./first-childs-child.component.scss']
})
export class FirstChildsChildComponent implements OnInit {
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {

}
}
