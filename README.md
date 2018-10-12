# ius
IUS frontend assignment

## Techniques used
JavaScript/ES6/TypeScript  
Angular  
Angular CLI version 6.2.4  
Bootstrap 4

## Implemented
### Primary task (mandatory)
* Authentication using JWT:
    * LoginComponent, AuthService.
* Components for each of the ways to interact with the news posts:
    * Listing/displaying news: NewsComponent
    * Creating/adding a news post: CreateArticleComponent
    * Editing a news post: UpdateArticleComponent
    * Deleting a post: DeleteArticleComponent
        * Article, ArticleService, ReadArticleComponent.
* A routing module:
    * AppRoutingModule, AuthGuard.
* Reactive Forms is used when creating and editing news posts.
* All form controls with validation show feedback if invalid.
* A pipe:
    * KeepHtmlPipe.

### Extra tasks (optional)
* A Http Interceptor:
    * TokenInterceptorService.

## TODO (mandatory)
* At least one TypeScript interface should be implemented.
