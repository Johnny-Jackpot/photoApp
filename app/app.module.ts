import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './modules/app-routing.module';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/loginPage.component';
import { AlbumsComponent } from './components/albums.component';
import { AlbumComponent } from './components/album.component';
import { PhotoComponent } from './components/photo.component';

import { UserService } from './services/user.service';
import { AlbumsService } from './services/albums.service';
import { CacheService } from './services/cache.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],

  declarations: [
    AppComponent,
    LoginPageComponent,
    AlbumsComponent,
    AlbumComponent,
    PhotoComponent
  ],

  providers: [
    UserService,
    AlbumsService,
    CacheService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
