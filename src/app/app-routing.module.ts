import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignPageComponent } from './sign-page/sign-page.component';
import { TwoStepComponent } from './two-step/two-step.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {path:"", component: SignPageComponent},
   // {path:"login", component: SignPageComponent},
  {path:"login", component: SignPageComponent},
  {path:"dashboard", component: DashboardComponent},
  {path:"two-step", component: TwoStepComponent},
  {path:"logout", component: LogoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
