import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ArticleService } from '../article.service';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {
  createForm = this.fb.group({
    title: ['', [Validators.required, Validators.maxLength(255)]],
    excerpt: ['', Validators.maxLength(255)],
    post: ['', Validators.required]
  });

  error: any;

  constructor(
    private articleService: ArticleService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

  createArticle() {
    this.articleService.create(this.createForm.value)
      .subscribe(
        res => {
          this.router.navigate(['/coa/news']);
        },
        err => this.error = err
      )
  }
}
