import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Article } from './article';

@Injectable()
export class ArticleService {
  private newsUrl = 'https://demo-fpapi.iusin.se/coa/news';

  constructor(private http: HttpClient) { }

  getArticles() {
    return this.http
      .get<Article[]>(this.newsUrl, {
        headers: {'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyUm9sZSI6ImNvYSIsInN1YiI6OCwiaXNzIjoiaHR0cHM6XC9cL2RlbW8tZnBhcGkuaXVzaW4uc2VcL2F1dGgiLCJpYXQiOjE1MzkxNzk1MDgsImV4cCI6MTUzOTE4MzEwOCwibmJmIjoxNTM5MTc5NTA4LCJqdGkiOiI1YUtkUnFQQWhEb3hmVEIyIn0.6YEnQDMlSbnA3LydO6JWUMtJR1lHpirgW3LRVAuastQ'}
      })
      .pipe(
        catchError(this.handleError)
      );
  }

  read(article) {
    alert(`You clicked the: ${article.id}`);
  }

  update(article) {
    alert(`You clicked the: ${article.id}`);
  }

  delete(article) {
    return this.http
      .delete<Article[]>(this.newsUrl + '/' + article.id, {
        headers: {'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyUm9sZSI6ImNvYSIsInN1YiI6OCwiaXNzIjoiaHR0cHM6XC9cL2RlbW8tZnBhcGkuaXVzaW4uc2VcL2F1dGgiLCJpYXQiOjE1MzkxNzk1MDgsImV4cCI6MTUzOTE4MzEwOCwibmJmIjoxNTM5MTc5NTA4LCJqdGkiOiI1YUtkUnFQQWhEb3hmVEIyIn0.6YEnQDMlSbnA3LydO6JWUMtJR1lHpirgW3LRVAuastQ'}
      })
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
