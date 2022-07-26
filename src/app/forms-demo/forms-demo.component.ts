import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms-demo',
  templateUrl: './forms-demo.component.html',
  styleUrls: ['./forms-demo.component.scss']
})
export class FormsDemoComponent implements OnInit {
@ViewChild('form') form!:NgForm;
@ViewChild('address') address!:NgForm;
  constructor() { }
userData = {
  userName:'',
  age:'',
  gender:'',
  address:{
    state:'',
    city:'',
    country:''
  }
}
  ngOnInit(): void {
  }
  submit(formParam:NgForm){
    //console.log(this.form);
    console.log(formParam);
    console.log('Form Group',this.address)
    this.userData=formParam.value;
    this.userData.userName = this.form.value.name;
    this.userData.address.state = this.form.value.address.state;
    console.log(this.userData);
  }

}
