import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { NewsComponent } from './news/news.component';
import { CreateArticleComponent } from './create-article/create-article.component';

import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: '', redirectTo: 'auth', pathMatch: 'full'},
  {path: 'auth', component: LoginComponent},
  {path: 'coa/news', component: NewsComponent, canActivate: [AuthGuard]},
  {path: 'create', component: CreateArticleComponent/*, canActivate: [AuthGuard]*/}
  /*{path: 'coa/news/:articleId', component: UpdateComponent, canActivate: [AuthGuardService]},
  {path: 'coa/news/:articleId', component: DeleteComponent, canActivate: [AuthGuardService]}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
