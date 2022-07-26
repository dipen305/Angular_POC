import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, map, Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs-playground',
  templateUrl: './rxjs-playground.component.html',
  styleUrls: ['./rxjs-playground.component.scss']
})
export class RxjsPlaygroundComponent implements OnInit,OnDestroy {
  tesObservableSub: any;

  constructor() { }
  ngOnDestroy(){
    this.tesObservableSub.unsubscribe()
  }

  ngOnInit(): void {
    const testObservable = new Observable(observer=>{
      let count=0
      setInterval(()=>{
        observer.next(count);
        if(count>3){
        observer.error(new Error('something wnet wrong'))
        }
        //observer.complete();
        count++;
      },1000)
    })
    
    // // old way
    // this.tesObservableSub = testObservable.subscribe(data=>{
    //   console.log(data);
    // },error=>{
    //   console.log(error);
    // });

    // //new way
    // this.tesObservableSub = testObservable.subscribe({
    //   next:data=>{console.log(data);},
    //   error:error=>{console.log(error);},
    //   complete:()=>{}
    // })

    this.tesObservableSub = testObservable.pipe(filter((data:any) => {return data>0}),map(data => {return data + ' - Round'})).subscribe({
      next:data=>{console.log(data);}, 
      error:error=>{console.log(error);},
      complete:()=>{}
    });
  }


}
