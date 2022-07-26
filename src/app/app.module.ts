import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstChildComponent } from './first-child/first-child.component';
import { SecondChildComponent } from './second-child/second-child.component';
import { ParentComponent } from './parent/parent.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserDataService } from './services/user-data.service';
import { ErrorComponent } from './error/error.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { FirstChildsChildComponent } from './first-child/first-childs-child/first-childs-child.component';
import { RoutingDemoComponent } from './routing-demo/routing-demo.component';
import { RoutingDemoChildComponent } from './routing-demo/routing-demo-child/routing-demo-child.component';
import { AuthGuardDemoComponent } from './auth-guard-demo/auth-guard-demo.component';
import { LogInComponent } from './log-in/log-in.component';
import { CanDeactivateGuard } from './guards/can-deactivate.guard';
import { CanDeactivateGuardDemoComponent } from './can-deactivate-guard-demo/can-deactivate-guard-demo.component';
import { ResolveGuardDemoComponent } from './resolve-guard-demo/resolve-guard-demo.component';
import { HttpClientModule } from '@angular/common/http';
import { RxjsPlaygroundComponent } from './rxjs-playground/rxjs-playground.component';
import { FormsDemoComponent } from './forms-demo/forms-demo.component';
import { TemplateDrivenFormComponent } from './forms-demo/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './forms-demo/reactive-form/reactive-form.component';


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
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [UserDataService,AuthGuard,AuthService,CanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
