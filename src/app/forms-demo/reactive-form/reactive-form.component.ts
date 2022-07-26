import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  userDataForm!:FormGroup;
  userData:any;
  gender = ['male','female']
  isSubmitted = false;
  constructor() { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(){
    this.userDataForm = new FormGroup({
      name: new FormControl(null,[Validators.required]),
      age: new FormControl(null),
      gender: new FormControl(null),
      address: new FormGroup({
        city: new FormControl(null,[Validators.required]),
        state: new FormControl(null),
        country: new FormControl(null)
      }),
      hobbies: new FormArray([])
    })
  }
  onSubmit(){
    console.log(this.userDataForm.value);
    this.userData = this.userDataForm.value;
    this.isSubmitted = true;
  }
  onAddHobby(){
    let control = new FormControl(null);
   (<FormArray>this.userDataForm.get('hobbies')).push(control);
  }

  getControls() {
    return (<FormArray>this.userDataForm.get('hobbies')).controls;
  }

  get controls() {
    return (this.userDataForm.get('hobbies') as FormArray).controls;
  }
  
  

}
