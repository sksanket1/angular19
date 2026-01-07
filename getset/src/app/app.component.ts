import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-root',
  imports: [ProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'getset';
  name="";
  displayName="";
  email="";
  getName(event:Event){
    this.name=(event.target as HTMLInputElement).value
  }
  showName(){
    this.displayName=this.name;
  }
  setName(){
    this.name="your name";
  }
  getEmail(val:string){
    console.log(val);
    this.email=val;
  }
  setEmail(){
    this.email="sdadas@gmail.com";
  }
}
