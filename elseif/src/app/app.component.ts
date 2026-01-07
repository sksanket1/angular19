import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'elseif';
  code=1;

  handle(val:number){
    this.code=val;
    console.log(this.code);
  }

  colornum(event:Event){
    this.code=parseInt((event.target as HTMLInputElement).value);
  }
}