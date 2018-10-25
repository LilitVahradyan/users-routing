import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PhotosComponent } from './pages/photos/photos.component';
import { UsersComponent } from './pages/users/users.component';
import { PostsComponent } from './pages/posts/posts.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'about', component: AboutComponent},
  {path: 'users', component: UsersComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'photo', component: PhotosComponent},
  {path: 'photo/:id', component: PhotosComponent},
  {path: 'posts/:id', component: PostsComponent},
	{path: '**', component: NotFoundComponent}
] 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    UsersComponent,
    PostsComponent,
    PhotosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CoreModule],
  bootstrap: [AppComponent]
})
export class AppModule { }



