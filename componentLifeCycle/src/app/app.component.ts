import { afterNextRender, afterRender, Component, ViewChild } from '@angular/core';
import { UserComponent } from './user/user.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [UserComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @ViewChild('user') UserComponent: any;
  title = 'componentLifeCycle';
  count = 0;

  constructor() {
    afterRender(() => {//run every time child is called
      console.log("after render", this.UserComponent.counter);
    })
    afterNextRender(()=>{//run only once at start, check changes in child
      console.log("after next render", this.UserComponent.counter);
    })
  }

  UpdateCounter() {
    this.count++;
  }
}
