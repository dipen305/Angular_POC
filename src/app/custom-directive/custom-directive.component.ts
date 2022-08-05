import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-directive',
  templateUrl: './custom-directive.component.html',
  styleUrls: ['./custom-directive.component.scss']
})
export class CustomDirectiveComponent implements OnInit {
  isShown = true;
  constructor() { }

  ngOnInit(): void {
  }
  onChange(){
    this.isShown = !this.isShown;
  }

}
