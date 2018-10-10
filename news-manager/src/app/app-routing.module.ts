import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { NewsComponent } from './news/news.component';

import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  {path: '', redirectTo: 'auth', pathMatch: 'full'},
  {path: 'auth', component: LoginComponent},
  {path: 'coa/news', component: NewsComponent/*, canActivate: [AuthGuardService]*/},
  /*{path: 'coa/news/:articleId', component: UpdateComponent, canActivate: [AuthGuardService]},
  {path: 'coa/news/:articleId', component: DeleteComponent, canActivate: [AuthGuardService]}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
