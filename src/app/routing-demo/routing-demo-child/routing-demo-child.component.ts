import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-routing-demo-child',
  templateUrl: './routing-demo-child.component.html',
  styleUrls: ['./routing-demo-child.component.scss']
})
export class RoutingDemoChildComponent implements OnInit {
  paramValue: any;
  queryParam: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: any) => {
      console.log(data);
      this.paramValue = data['id'];
    })
    this.route.queryParams.subscribe((data:any)=>{
      this.queryParam = JSON.stringify(data);

    })
  }
}
