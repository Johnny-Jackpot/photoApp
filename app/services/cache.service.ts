import { Injectable } from '@angular/core';

@Injectable()
export class CacheService {
    private user: any;
    private albums: any[];
    private album: any[];
    private photos: any[];

    setUser(user: any) {
        this.user = user;
    }

    getUser(): any {
        if (this.user) return this.user;
        else return false;
    }

    setAlbums(albums: any): void {
        this.albums = albums;
    }

    getAlbums(): any {
        if (this.albums) return this.albums;
        else return false;
    }

    setAlbum(album: any, albumId: number) {
        if (!this.album) this.album = [];

        this.album[albumId] = album;
    }

    getAlbum(albumId: number): any {
        if (!this.album) return false;

        let album = this.album[albumId];
        if (album) return album;
        else return false;
    }

    setPhoto(photo: any, photoId: number) {
        if (!this.photos) this.photos = [];

        this.photos[photoId] = photo;
    }

    getPhoto(photoId: number) {
        if (!this.photos) return false;

        let photo = this.photos[photoId];
        if (photo) return photo;
        else return false;
    }
}