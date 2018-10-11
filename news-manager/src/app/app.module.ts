import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { QuillModule } from 'ngx-quill';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewsComponent } from './news/news.component';
import { LoginComponent } from './login/login.component';

import { ArticleService } from './article.service';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { CreateArticleComponent } from './create-article/create-article.component';
import { UpdateArticleComponent } from './update-article/update-article.component';
import { DeleteArticleComponent } from './delete-article/delete-article.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NewsComponent,
    LoginComponent,
    CreateArticleComponent,
    UpdateArticleComponent,
    DeleteArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpClientModule,
    QuillModule
  ],
  providers: [
    ArticleService,
    AuthService,
    AuthGuard,
    CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
