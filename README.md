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
* A pipe:
    * KeepHtmlPipe.

### Extra tasks (optional)
* A Http Interceptor:
    * TokenInterceptorService.

## TODO (mandatory)
* Creating and editing news posts should be done by implementing Reactive Forms.
* All form controls with validation should show feedback if invalid.
* At least one TypeScript interface should be implemented.
