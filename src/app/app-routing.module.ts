import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimationDemoComponent } from './animation-demo/animation-demo.component';
import { AuthGuardDemoComponent } from './auth-guard-demo/auth-guard-demo.component';
import { CanDeactivateGuardDemoComponent } from './can-deactivate-guard-demo/can-deactivate-guard-demo.component';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { DynamicComponentComponent } from './dynamic-component/dynamic-component.component';
import { ErrorComponent } from './error/error.component';
import { FormsDemoComponent } from './forms-demo/forms-demo.component';
import { AuthGuard } from './guards/auth.guard';
import { CanDeactivateGuard } from './guards/can-deactivate.guard';
import { ResolveGuard } from './guards/resolve.guard';
import { HttpDemoComponent } from './http-demo/http-demo.component';
import { LogInComponent } from './log-in/log-in.component';
import { ParentComponent } from './parent/parent.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { ResolveGuardDemoComponent } from './resolve-guard-demo/resolve-guard-demo.component';
import { RoutingDemoChildComponent } from './routing-demo/routing-demo-child/routing-demo-child.component';
import { RoutingDemoComponent } from './routing-demo/routing-demo.component';
import { RxjsPlaygroundComponent } from './rxjs-playground/rxjs-playground.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'/home'},
  {path:'home',component:ParentComponent},
  {path:'can-deactivate-guard',component:CanDeactivateGuardDemoComponent, canDeactivate:[CanDeactivateGuard]},
  {path:'auth-guard-demo',component:AuthGuardDemoComponent,canActivate:[AuthGuard]},
  {path:'resolve-guard-demo',component:ResolveGuardDemoComponent,resolve:{server:ResolveGuard}},
  {path:'sign-in',component:LogInComponent},
  {path:'routing-demo',component:RoutingDemoComponent, children:[
    {path:':id',component:RoutingDemoChildComponent}
  ]},
  {path:'rxjs-playground', component:RxjsPlaygroundComponent},
  {path:'forms', component:FormsDemoComponent},
  {path:'custom-directive', component:CustomDirectiveComponent},
  {path:'pipes', component:PipesDemoComponent},
  {path:'dynamic-component', component:DynamicComponentComponent},
  {path:'animation', component:AnimationDemoComponent},
  {path:'test', component:TestComponent},
  {path:'http', component:HttpDemoComponent},
  {path:'error', component:ErrorComponent},
  {path:'**',component:ParentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
