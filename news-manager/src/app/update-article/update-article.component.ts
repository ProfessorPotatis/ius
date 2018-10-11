import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ArticleService } from '../article.service';
import { Article } from '../article';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent implements OnInit {
  newsArticle: Article[];

  constructor(
    private articleService: ArticleService,
    private router: Router
  ) { }

  ngOnInit() {
    this.newsArticle = this.articleService.getArticleData();
  }

  updateArticle() {
    this.articleService.update(this.newsArticle)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/coa/news']);
        },
        err => console.log(err)
      )
  }

}