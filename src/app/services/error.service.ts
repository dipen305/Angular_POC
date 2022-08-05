import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
errorMessage : Subject<any> = new Subject<any>;
  constructor() { }
  setErrorMessage(message:string){
    this.errorMessage.next(message);
  }
  getErrorMessage(){
    return this.errorMessage;
  }
}
