import { Component } from '@angular/core';

@Component({
    selector: 'login-page',
    template: `
        <p>
        Welcome to photo app. 
        Please <a href="app/openDialog">login</a> with
        your VK accaunt.
        </p>
    `,
})
export class LoginPageComponent {}