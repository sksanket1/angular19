import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ifelse';

  display=true;
  toggleDiv=false;
  hide(){
    this.display=false;
  }
  show(){
    this.display=true;
  }
  toggle(){
    this.display=!this.display;
  }
  toggleboth(){
    this.toggleDiv=!this.toggleDiv;
  }
}
