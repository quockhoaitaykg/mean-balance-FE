import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenComponent } from './authen.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from '../pages/miscellaneous/not-found/not-found.component';


const routes: Routes = [{
  path: '',
  component: AuthenComponent,
  children: [{
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenRoutingModule { }

export const routedComponents = [
    AuthenComponent,
    LoginComponent,
];
