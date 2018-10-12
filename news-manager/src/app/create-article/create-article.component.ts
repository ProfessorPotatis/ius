import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ArticleService } from '../article.service';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {
  articleData = {};
  error: any;

  constructor(
    private articleService: ArticleService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  createArticle() {
    this.articleService.create(this.articleData)
      .subscribe(
        res => {
          this.router.navigate(['/coa/news']);
        },
        err => this.error = err
      )
  }
}
