import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Article } from './article';

@Injectable()
export class ArticleService {
  private newsUrl = 'https://demo-fpapi.iusin.se/coa/news';
  chosenArticle: Article[];

  constructor(private http: HttpClient) { }

  getArticles() {
    return this.http
      .get<Article[]>(this.newsUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  setArticleData(article) {
    this.chosenArticle = article;
  }

  getArticleData() {
    return this.chosenArticle;
  }

  create(article) {
    return this.http
      .post<any>(this.newsUrl, article)
      .pipe(
        catchError(this.handleError)
      );
  }

  update(article) {
    console.log(article.id);
    return this.http
      .put<any>(this.newsUrl + '/' + article.id, article)
      .pipe(
        catchError(this.handleError)
      );
  }

  delete(article) {
    console.log(article.id);
    return this.http
      .delete<Article[]>(this.newsUrl + '/' + article.id)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Implement a method to handle errors if any
  private handleError(err: HttpErrorResponse | any) {
    console.error('An error occurred', err);
    return throwError(err.message || err);
  }
}
