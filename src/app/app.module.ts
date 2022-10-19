import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstChildComponent } from './parent/first-child/first-child.component';
import { SecondChildComponent } from './parent/second-child/second-child.component';
import { ParentComponent } from './parent/parent.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserDataService } from './services/user-data.service';
import { ErrorComponent } from './error/error.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { FirstChildsChildComponent } from './parent/first-child/first-childs-child/first-childs-child.component';
import { RoutingDemoComponent } from './routing-demo/routing-demo.component';
import { RoutingDemoChildComponent } from './routing-demo/routing-demo-child/routing-demo-child.component';
import { AuthGuardDemoComponent } from './auth-guard-demo/auth-guard-demo.component';
import { LogInComponent } from './log-in/log-in.component';
import { CanDeactivateGuard } from './guards/can-deactivate.guard';
import { CanDeactivateGuardDemoComponent } from './can-deactivate-guard-demo/can-deactivate-guard-demo.component';
import { ResolveGuardDemoComponent } from './resolve-guard-demo/resolve-guard-demo.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RxjsPlaygroundComponent } from './rxjs-playground/rxjs-playground.component';
import { FormsDemoComponent } from './forms-demo/forms-demo.component';
import { TemplateDrivenFormComponent } from './forms-demo/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './forms-demo/reactive-form/reactive-form.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { CustomPipe } from './pipes-demo/custom.pipe';
import { HttpDemoComponent } from './http-demo/http-demo.component';
import { PostsService } from './services/posts.service';
import { AuthInterceptorService } from './interceptors/auth-interceptor.service';
import { LoggingInterceptorService } from './interceptors/logging-interceptor.service';
import { LoaderComponent } from './shared/loader/loader.component';
import { ErrorModalComponent } from './shared/error-modal/error-modal.component';
import { ErrorBoxComponent } from './shared/error-box/error-box.component';
import { HighlightBgColorDirective } from './shared/directives/highlight-bg-color.directive';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { UnlessDirective } from './shared/directives/unless.directive';
import { TestComponent } from './test/test.component';
import { ErrorService } from './services/error.service';
import { PlaceholderDirective } from './shared/directives/placeholder.directive';
import { DynamicComponentComponent } from './dynamic-component/dynamic-component.component';
import { AnimationDemoComponent } from './animation-demo/animation-demo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';


@NgModule({
  declarations: [
    AppComponent,
    FirstChildComponent,
    SecondChildComponent,
    ParentComponent,
    ErrorComponent,
    FirstChildsChildComponent,
    RoutingDemoComponent,
    RoutingDemoChildComponent,
    AuthGuardDemoComponent,
    LogInComponent,
    CanDeactivateGuardDemoComponent,
    ResolveGuardDemoComponent,
    RxjsPlaygroundComponent,
    FormsDemoComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    PipesDemoComponent,
    CustomPipe,
    HttpDemoComponent,
    LoaderComponent,
    ErrorModalComponent,
    ErrorBoxComponent,
    HighlightBgColorDirective,
    CustomDirectiveComponent,
    UnlessDirective,
    TestComponent,
    PlaceholderDirective,
    DynamicComponentComponent,
    AnimationDemoComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [
    UserDataService,
    AuthGuard,
    AuthService,
    CanDeactivateGuard,
    PostsService,
    ErrorService,
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptorService,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:LoggingInterceptorService,multi:true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
