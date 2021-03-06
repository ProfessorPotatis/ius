import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { NewsComponent } from './news/news.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { ReadArticleComponent } from './read-article/read-article.component';
import { UpdateArticleComponent } from './update-article/update-article.component';
import { DeleteArticleComponent } from './delete-article/delete-article.component';

import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: '', redirectTo: 'coa/news', pathMatch: 'full'},
  {path: 'auth', component: LoginComponent},
  {path: 'coa/news', component: NewsComponent, canActivate: [AuthGuard]},
  {path: 'coa/news/create', component: CreateArticleComponent, canActivate: [AuthGuard]},
  {path: 'coa/news/read/:id', component: ReadArticleComponent, canActivate: [AuthGuard]},
  {path: 'coa/news/update/:id', component: UpdateArticleComponent, canActivate: [AuthGuard]},
  {path: 'coa/news/delete/:id', component: DeleteArticleComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
