import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
interface hobbiesList {
	hobbies: string;
}
@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})

export class TemplateDrivenFormComponent implements OnInit {
  @ViewChild('form') form!:NgForm;
  @ViewChild('address') address!:NgForm;
  gender = ['male','female'];
  public hobbiesList!:  {
    hobbies: hobbiesList[]
  };
  isSubmitted = false;
    constructor() {
      this.hobbiesList = {
        hobbies :[]
      }
     }
    userData:any;
  // userData = {
  //   userName:'',
  //   age:'',
  //   gender:'',
  //   address:{
  //     state:'',
  //     city:'',
  //     country:''
  //   }
  // }
    ngOnInit(): void {
    }
    submit(formParam:NgForm){
      //console.log(this.form);
      console.log(formParam);
      console.log('Form Group',this.address)
      this.userData=formParam.value;
      this.userData.userName = this.form.value.name;
      this.userData.address.state = this.form.value.address.state;
      this.isSubmitted =true;

      console.log(this.userData);
    }
    onAddHobby(){
      this.hobbiesList.hobbies.push({
        hobbies:'test'
      })
      console.log('hobbyList',this.hobbiesList)
    }
  
  }
