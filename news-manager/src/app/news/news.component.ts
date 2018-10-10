import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Article } from '../article';

//import { AuthService } from '../auth-guard.service';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit, OnDestroy {
  newsSub: Subscription;
  newsArticles: Article[];
  error: any;

  constructor(
    public articleService: ArticleService,
    //public authService: AuthService
  ) { }

  ngOnInit() {
    this.newsSub = this.articleService
      .getArticles()
      .subscribe(
        articles => this.newsArticles = articles,
        err => this.error = err
      );
  }

  ngOnDestroy() {
    this.newsSub.unsubscribe();
  }
}
