import { Component } from '@angular/core';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  imports: [UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'childToParent';

  users: undefined | string[];

  handleUser(users: string[]) {
    console.log(users);
    this.users = users;
  }
}