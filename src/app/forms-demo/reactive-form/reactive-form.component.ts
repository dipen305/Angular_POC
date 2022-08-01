import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

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
    // returns value each time it changes
    this.userDataForm.valueChanges.subscribe((value)=>{
      console.log(value);
    });
    // returns status of form each time it changes
    this.userDataForm.statusChanges.subscribe((status)=>{
      console.log(status);
    });
  }

  initializeForm(){
    this.userDataForm = new FormGroup({
      name: new FormControl(null,[Validators.required]),
      age: new FormControl(null,[Validators.required,this.ageLimitCheck]),
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
    this.userDataForm.get('gender')?.patchValue('male');
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

  ageLimitCheck(control: FormControl){
    if(control.value<20){
      return {'ageLimitForbidden':true};
    }
    return null;
  }
  
  forbiddenName(control: FormControl): Promise<any> | Observable<any>{
    const promise = new Promise<any>((resolve,reject)=>{
      setTimeout(() => {
        if(control.value=='test'){
          resolve({'nameIsForbidden':true});
        } else
          resolve(null);
      }, 1500);
    })
    return promise;
  }
}
