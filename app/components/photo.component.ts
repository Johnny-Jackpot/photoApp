import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { AlbumsService } from '../services/albums.service';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'photo',
    templateUrl: 'app/templates/photo.component.html',
    styleUrls: ['app/styles/photo.component.css']
})
export class PhotoComponent implements OnInit {
    private photo: any;
    private src: any;

    constructor(
        private albumsService: AlbumsService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit() {
        this.route.params
            .switchMap((params: Params) => this.albumsService.getPhoto(+params['id']))
            .subscribe((photo: any) => {
                this.photo = photo;
                this.src = this.extractSrc(photo.sizes);
            });
    }

    private extractSrc(sizes: any[]) {
        let width = 0, src = '';

        for (let i = 0; i < sizes.length; i++) {

            if (sizes[i].width >= width) {
                src = sizes[i].src;
            }

        }

        return src;
    }

    goBack(): void {
        this.location.back();
    }
}