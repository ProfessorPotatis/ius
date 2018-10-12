import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ArticleService } from '../article.service';
import { Article } from '../article';

@Component({
  selector: 'app-delete-article',
  templateUrl: './delete-article.component.html',
  styleUrls: ['./delete-article.component.css']
})
export class DeleteArticleComponent implements OnInit {
  newsArticle: Article[];
  error: any;

  constructor(
    private articleService: ArticleService,
    private router: Router
  ) { }

  ngOnInit() {
    this.newsArticle = this.articleService.getArticleData();
  }

  deleteArticle() {
    this.articleService.delete(this.newsArticle)
      .subscribe(
        res => {
          this.router.navigate(['/coa/news']);
        },
        err => this.error = err
      )
  }

}
