import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {Routes , RouterModule} from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LeftAsideComponent } from './left-aside/left-aside.component';
import { FooterComponent } from './footer/footer.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ContentComponent } from './content/content.component';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';




const routes: Routes = [
{path: 'content' , component: ContentComponent},
{path: '' , component: ContentComponent},
{path: 'notfound' , component: NotfoundComponent},
{path: 'content/:userid' , component: ContentComponent},
];




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LeftAsideComponent,
    FooterComponent,
    NotfoundComponent,
    ContentComponent,
    PostComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
