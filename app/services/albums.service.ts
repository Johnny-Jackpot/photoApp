import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { CacheService } from './cache.service';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AlbumsService {
    constructor(
        private http: Http,
        private cache: CacheService) { }

    getAlbums(): Promise<any> {
        let albums = this.cache.getAlbums();
        if (albums) return Promise.resolve(albums);

        let url = 'api/getAlbums';
        return this.http.get(url)
            .toPromise()
            .then(response => {
                let albums = response.json().response.items;
                this.cache.setAlbums(albums);

                return albums;
            })
            .catch(err => console.log(err));
    }

    getAlbum(albumId: number): Promise<any> {
        let album = this.cache.getAlbum(albumId);
        if (album) return Promise.resolve(album);

        let url = 'api/getAlbum' + '/' + albumId;
        return this.http.get(url)
            .toPromise()
            .then(response => {
                let album = response.json().response.items;
                this.cache.setAlbum(album, albumId);

                return album;
            })
            .catch(err => console.log(err));
    }

    getPhoto(photoId: number): Promise<any> {
        let photo = this.cache.getPhoto(photoId);
        if (photo) return Promise.resolve(photo);

        let url = 'api/getPhoto' + '/' + photoId;
        return this.http.get(url)
            .toPromise()
            .then(response => {
                let photo = response.json().response[0];
                this.cache.setPhoto(photo, photoId);

                return photo;
            })
            .catch(err => console.log(err));
    }
}