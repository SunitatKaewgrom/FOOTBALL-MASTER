import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TeamsComponent } from './teams/teams.component';
import { UsersComponent } from './users/users.component';

@Component({
    selector: 'app-admin',
    standalone: true,
    templateUrl: './admin.component.html',
    styleUrl: './admin.component.scss',
    imports: [HeaderComponent,RouterOutlet, RouterModule, TeamsComponent, UsersComponent],
})
export class AdminComponent {

    constructor() { }

    ngOnInit() {

    }


}
