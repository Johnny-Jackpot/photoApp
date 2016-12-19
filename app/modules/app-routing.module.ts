import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from '../components/loginPage.component';
import { AlbumsComponent } from '../components/albums.component';
import { AlbumComponent } from '../components/album.component';
import { PhotoComponent } from '../components/photo.component';


const routes: Routes = [
    //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'login', component: LoginPageComponent },
    { path: 'albums', component: AlbumsComponent },
    { path: 'album/:id', component: AlbumComponent },
    { path: 'photo/:id', component: PhotoComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
