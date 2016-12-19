import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './services/user.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/app.component.html',
  styleUrls: ['app/styles/app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser().then(data => {

      if (!data) {
        this.router.navigate(['/login']);
        return;
      }

      if (data['first_name'] && data['id'] && data['last_name']) {
        this.router.navigate(['/albums']);
      }

    });
  }

}

