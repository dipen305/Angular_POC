import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-routing-demo',
  templateUrl: './routing-demo.component.html',
  styleUrls: ['./routing-demo.component.scss']
})
export class RoutingDemoComponent implements OnInit {

  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
  }
  onChildRoutes(){
    console.log(this.route);
    // this.router.navigate(['/first-child',10],{ relativeTo:this.route})
    this.router.navigate(['routing-demo',10],{queryParams:{id:10,name:'Dipen'}})
  }

}
