import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ArticleService } from '../article.service';
import { Article } from '../article';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent implements OnInit {
  updateForm = this.fb.group({
    id: [''],
    title: ['', [Validators.required, Validators.maxLength(255)]],
    excerpt: ['', Validators.maxLength(255)],
    post: ['', Validators.required]
  });

  newsArticle: Article[];
  error: any;

  constructor(
    private articleService: ArticleService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.newsArticle = this.articleService.getArticleData();
  }

  updateArticle() {
    this.articleService.update(this.updateForm.value)
      .subscribe(
        res => {
          this.router.navigate(['/coa/news']);
        },
        err => this.error = err
      )
  }

}
