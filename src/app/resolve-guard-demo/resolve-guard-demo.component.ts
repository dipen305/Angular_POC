import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resolve-guard-demo',
  templateUrl: './resolve-guard-demo.component.html',
  styleUrls: ['./resolve-guard-demo.component.scss']
})
export class ResolveGuardDemoComponent implements OnInit {
  userData:any;
  tableHeader:any;
  constructor(private route:ActivatedRoute) { 
    console.log('Resolver Demo Component Loaded')
  }

  ngOnInit(): void {
    this.route.data.subscribe((data)=>{
      this.userData =  data['server'];
      if(this.userData)
      this.tableHeader = Object.keys(this.userData[0]);
    })
  }
}
