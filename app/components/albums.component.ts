import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlbumsService } from '../services/albums.service';
import { UserService } from '../services/user.service';

import 'rxjs/add/operator/toPromise';
import * as moment from 'moment';

@Component({
    selector: 'albums',
    templateUrl: 'app/templates/albums.component.html',
    styleUrls: ['app/styles/albums.component.css']
})
export class AlbumsComponent implements OnInit {
    name: any;
    albums: any = [];
    noAlbums: boolean = false;

    constructor(
        private userService: UserService,
        private albumsService: AlbumsService,
        private router: Router) { }

    ngOnInit(): void {

        this.userService.getUser().then(data => {
            this.name = data['first_name'] + ' ' + data['last_name'];
        });

        this.albumsService.getAlbums().then(data => {
            this.albums = data;

            if (!this.albums.length) {
                this.noAlbums = true;
                return;
            }

            //set date in albums array
            for (let i = 0, n = this.albums.length; i < n; i++) {
                let dateUpdated = this.albums[i].updated;
                /*
                this 2 lines is crutch because every new instance of AlbumsComponent
                trying change cache array "albums" in single instanse of CacheService
                */
                if (!dateUpdated) continue;
                if (typeof dateUpdated !== 'number') return;
                
                if (dateUpdated) {
                    dateUpdated = moment.unix(this.albums[i].updated).fromNow();
                    this.albums[i].updated = dateUpdated;
                }
            }

            

        });
    }

    goToAlbum(albumId: number): void {
        this.router.navigate(['/album', albumId]);
    }
}
