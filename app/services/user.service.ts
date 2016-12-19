import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { CacheService } from './cache.service';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
    constructor(
        private http: Http,
        private cache: CacheService) { }

    getUser(): Promise<any> {
        let cachedUser = this.cache.getUser();
        if (cachedUser) return Promise.resolve(cachedUser);

        return this.http.get('api/getUser')
            .toPromise()
            .then(response => {
                let user = response.json().response[0];
                this.cache.setUser(user);
                
                return user;
            })
            .catch(err => console.log(err));

    }
}