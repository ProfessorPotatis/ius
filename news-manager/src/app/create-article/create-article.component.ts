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

  constructor(
    private articleService: ArticleService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  createArticle() {
    this.articleService.createArticle(this.articleData)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/coa/news']);
        },
        err => console.log(err)
      )
  }
}
