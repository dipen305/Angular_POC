import { Component, OnDestroy, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { concatMap, debounceTime, delay, distinctUntilChanged, exhaustMap, filter, map, mapTo, mergeMap, Observable, of, shareReplay, Subject, Subscription, switchMap, tap, timer } from 'rxjs';

@Component({
  selector: 'app-rxjs-playground',
  templateUrl: './rxjs-playground.component.html',
  styleUrls: ['./rxjs-playground.component.scss']
})
export class RxjsPlaygroundComponent implements OnInit,OnDestroy {
  // Model for form input value - this will always have latest value
  public inputValue: string = '11';

  debouncedInputValue :any;
  // Holds results
  public people$: Subject<any> = new Subject();

  // Observable for debouncing input changes
  private searchDecouncer$: Subject<string> = new Subject();

  tesObservableSub: any;
  rxjsOperatorType: string = '';
  sub = new Subject<string>();
  subscription?:Subscription;
  constructor() { 
  }
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

 this.setupSearchDebouncer();

    // Do initial search for 'darth'
    this.search(this.inputValue);
  }

  fireEvent() {
    this.sub.next("first");
    this.sub.next("second");

    console.log("-------");
  }
  onRxjsOperatorChange(event: any) {
    this.deregister();
    // this.fireEvent();
    switch (event.target.value) {
      case 'mergeMap':
        this.mergeMap();
        break;
      case 'concatMap':
        this.concateMap();
        break;
      case 'switchMap':
        this.switchMap();
        break;
      case 'exhaustMap':
        this.exhaustMap();
        break;
      default:
        break;
    }
  }

  mergeMap() {
    console.log('mergeMap');
    this.subscription = this.sub
      .asObservable()
      .pipe(
        tap(value => console.log("--> sent out", value)),
        mergeMap(value => this.anyLongRunningOp(value))
      )
      .subscribe(value => console.log("<-- received", value));
  }

  concateMap() {
    console.log('concateMap');
    this.subscription = this.sub
      .asObservable()
      .pipe(
        tap(value => console.log("--> sent out", value)),
        concatMap(value => this.anyLongRunningOp(value))
      )
      .subscribe(value => console.log("<-- received", value));

  }

  switchMap() {
    console.log('switchMap');
    this.subscription = this.sub
      .asObservable()
      .pipe(
        tap(value => console.log("--> sent out", value)),
        switchMap(value => this.anyLongRunningOp(value))
      )
      .subscribe(value => console.log("<-- received", value));
  }

  exhaustMap() {
    console.log('exhaustMap');
    this.subscription = this.sub
      .asObservable()
      .pipe(
        tap(value => console.log("--> sent out", value)),
        exhaustMap(value => this.anyLongRunningOp(value))
      )
      .subscribe(value => console.log("<-- received", value));
  }

  anyLongRunningOp(value: string) {
    return timer(2000).pipe(mapTo(value));
  }

  deregister() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  data = Array(100).fill(0).map(Math.random);
 loadAndSearch(term: string): Observable<Data> {
  const filtered = this.data.filter((item) => `${item}`.match(term));
  return of(filtered).pipe(delay(100));
}
public onSearchInputChange(term: string): void {
    // `onSearchInputChange` is called whenever the input is changed.
    // We have to send the value to debouncing observable
    this.searchDecouncer$.next(term);
  }
 private setupSearchDebouncer(): void {
    // Subscribe to `searchDecouncer$` values,
    // but pipe through `debounceTime` and `distinctUntilChanged`
    this.searchDecouncer$
      .pipe(debounceTime(250), distinctUntilChanged())
      .subscribe((term: string) => {
        // Remember value after debouncing
       this.debouncedInputValue = term;

        // Do the actual search
        this.search(term);
      });
  }

  private search(term: string): void {
    // Clear results
    this.people$.next(null);

    // Make API call
   
    this.loadAndSearch(term).subscribe((results) => {
      console.log(results);
      this.people$.next(results);
    });
  }
}
