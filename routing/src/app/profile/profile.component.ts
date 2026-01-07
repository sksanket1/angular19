import { Component } from '@angular/core';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [RouterLinkActive],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  constructor(private route: ActivatedRoute) { }
  username: string | null = "";

  ngOnInit() {
    // this.username = this.route.snapshot.paramMap.get('name');
    // console.log(this.username);
    this.route.queryParams.subscribe(params => {
      this.username = (params['name']);
    })
  }
}