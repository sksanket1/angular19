import { Component } from '@angular/core';
import { UsersService } from './service/users.service';
import { User } from './interfaces/User';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'integrateJSONapi';
  users: User[] = [];
  selectedUser: User | undefined;

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.userService.getUsers().subscribe((data: User[]) => {
      this.users = data;
      console.log(this.users);
    })
  }

  addUser(userForm: NgForm) {
    if (!this.selectedUser) {
      const user = userForm.value; // ✅ extract values from form

      this.userService.saveUsers(user).subscribe((data: User) => {
        if (data) {
          this.getUser();
          userForm.resetForm(); // ✅ clears form after adding
        }
      });
    }
    else {
      const user = userForm.value;
      const userData = { ...user, id: this.selectedUser.id }
      this.userService.updateUser(userData).subscribe((data) => {
        if (data) {
          this.getUser();
        }
      })
    }
  }

  deleteUser(id: string) {
    console.log(id);
    console.log("hello");
    this.userService.deleteUser(id).subscribe((data: User) => {
      if (data) {
        this.getUser();
      }
    })
  }

  updateUser(id: string) {
    this.userService.getSelectedUser(id).subscribe((data: User) => {
      this.selectedUser = data;
    })
  }

}