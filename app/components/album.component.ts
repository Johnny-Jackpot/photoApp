import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { AlbumsService } from '../services/albums.service';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'album',
    templateUrl: 'app/templates/album.component.html',
    styleUrls: ['app/styles/album.component.css']
})
export class AlbumComponent implements OnInit{
    private photos: any[] = [];
    private noPhotos: any = false;
    private albumId: number;
    private albumName: string = '';

    constructor(
        private albumsService: AlbumsService,
        private route: ActivatedRoute,
        private location: Location,
        private router: Router
    ) { }

    ngOnInit() {
        this.route.params
            .switchMap((params: Params) => {
                let albumId = +params['id'];
                this.albumId = albumId;
                return this.albumsService.getAlbum(albumId);
            })
            .subscribe((album: any) => {
                this.photos = this.extractPhotos(album);
                this.noPhotos = !this.photos.length;
            });

        this.getAlbumName(this.albumId);
    }

    goToPhoto(photoId: number) {
        this.router.navigate(['/photo', photoId]);
    }

    goBack(): void {
        this.location.back();
    }

    private extractPhotos(album: any[]) {
        let photos: any[] = [];
        for (var i = 0; i < album.length; i++) {
            var photoSizes = album[i].sizes;
            
            for (var j = 0; j < photoSizes.length; j++) {
               
                var type = photoSizes[j].type;
                if (type === 'p') {
                    photos[i] = {
                        id: album[i].id,
                        src: photoSizes[j].src,
                        text: album[i].text,
                        date: new Date(album[i].date * 1000)
                    };
                    
                    break;
                }
            }
        }
        
        return photos;
    }

    

    private getAlbumName(albumId: number) {
       this.albumsService.getAlbums().then(data => {
           data.map((album: any) => {
               if (album.id === this.albumId)
                    this.albumName = album.title;
           });
       });
    }

    onMouseEnter(event: any) {
        console.log(event.target);
    }
    
}