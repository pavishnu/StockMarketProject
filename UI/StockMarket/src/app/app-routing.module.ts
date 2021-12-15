import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserLoginViewComponent } from './Containers/user-login-view/user-login-view.component';
import { SignupViewComponent } from './Containers/signup-view/signup-view.component';
import { AdminLandingViewComponent } from './Containers/admin-landing-view/admin-landing-view.component';
import { UserLandingViewComponent } from './Containers/user-landing-view/user-landing-view.component';


const routes: Routes = [
  
  {path:'SignIn',component:UserLoginViewComponent},
  {path:'SignUp',component:SignupViewComponent},
  {path:'AdminLanding',component:AdminLandingViewComponent},
  {path:'UserLanding',component:UserLandingViewComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
