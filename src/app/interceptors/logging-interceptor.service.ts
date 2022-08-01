import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, tap } from "rxjs";

export class LoggingInterceptorService implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('========> Logging Interceptor Loaded <=========');
        console.log('Out Going Request')
        console.log('URL');
        if(req.method.toLocaleLowerCase() == 'post'){
            console.log('Post method called');
        } else if(req.method.toLocaleLowerCase() == 'get') {
            console.log('Get method called');
        } else {
            console.log('Delete method called');
        }
        return next.handle(req).pipe(tap(event=>{
            if(event.type === HttpEventType.Response){
                console.log('Incoming Response')
                console.log(event.body); 
            }
        }));
    }
}