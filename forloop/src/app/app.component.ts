import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'forloop';

  // users=['a','dasdas','fggfd','xvcvxcv','eqweqw','cxzcxxz','wqeeqwwqq'];
  users=[];
}
