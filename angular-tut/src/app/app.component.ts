import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-root',
  imports: [LoginComponent, SignupComponent, ProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  count = 0;

  increement() {
    this.count = this.count + 1;
  }

  decreement() {
    this.count = this.count - 1;
  }

  reset() {
    this.count = 0;
  }

  handleCounter(val: String) {
    if (val == '-') {
      this.count = this.count - 1;
      
    } else if (val == '+') {
      this.count = this.count + 1;
    }
    else {
      this.count = 0;
    }
  }
}