import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {Routes , RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';
import { LeftAsideComponent } from './left-aside/left-aside.component';
import { FooterComponent } from './footer/footer.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ContentComponent } from './content/content.component';
import { PostsComponent } from './posts/posts.component';

import { AccountService } from './services/account.service';
import { AlertifyService } from './services/alertify.service';
import { PathsService } from './services/paths.service';


import { PostFilterPipe } from './pipes/post-filter.pipe';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';


import {LoginGuard} from './login/login.guard';

const routes: Routes = [
{path: 'posts' , component: PostsComponent},
{path: 'content' , component: ContentComponent},
{path: '' , component: ContentComponent},
{path: 'notfound' , component: NotfoundComponent},
{path: 'content/:userid' , component: ContentComponent},
{path: 'posts/:userid' , component: PostsComponent},
{path: 'login' , component: LoginComponent},
];




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LeftAsideComponent,
    FooterComponent,
    NotfoundComponent,
    ContentComponent,
    PostsComponent,
    PostFilterPipe,
    HeaderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
  ],
  providers: [AlertifyService,
    PathsService,
    AccountService,
    LoginGuard ,
    { provide: 'apiUrl', useValue: 'https://jsonplaceholder.typicode.com/' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
