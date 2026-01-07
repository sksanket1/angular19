import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

  users = [
    {
      id: 1,
      name: "sanket",
      age: 37,
      email: "sfddfs@gmail.com"
    },
    {
      id: 2,
      name: "dasdasd",
      age: 23,
      email: "312321312@gmail.com"
    },
    {
      id: 3,
      name: "qqqqqqq",
      age: 41,
      email: "qqqqqq@gmail.com"
    }
  ];

  constructor(private router: Router) { }

  goToProfile(name: String) {
    this.router.navigate(['profile'], { queryParams: { name } })
  }
}