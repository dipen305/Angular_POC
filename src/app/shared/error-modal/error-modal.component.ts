import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-error-modal',
  templateUrl: './error-modal.component.html',
  styleUrls: ['./error-modal.component.scss']
})
export class ErrorModalComponent implements OnInit,OnChanges,OnDestroy {

  //@Input() errorMessage: string = '';
  errorMessage: string = '';
  errorSubscription!:Subscription;
  constructor(private errorService:ErrorService) { }
  ngOnChanges(changes: SimpleChanges){
    console.log(changes);
    this.errorMessage = changes['errorMessage'].currentValue;
  }

  ngOnInit(): void {
    this.errorSubscription = this.errorService.getErrorMessage().subscribe(errorMessage=>this.errorMessage=errorMessage);
  }

  onClose() {
    this.errorService.setErrorMessage('');
    //this.errorMessage = '';
  }

  ngOnDestroy() {
    this.errorSubscription.unsubscribe();
  }
}
