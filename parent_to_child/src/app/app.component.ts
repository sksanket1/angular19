import { Component } from '@angular/core';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  imports: [UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'parent_to_child';
  username = '';

  onUserChange(user: string) {
    this.username = user;
  }
}
