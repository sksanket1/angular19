import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users=["adasa","sanketdasdas","Shree","vir"]
  students=[
    {name:'a',age:12,email:'a@gmail.com'},
    {name:'b',age:13,email:'b@gmail.com'},
    {name:'daada',age:43,email:'daadd@gmail.com'},
    {name:'dascacaa',age:22,email:'dadasd@gmail.com'}
  ]

  title = 'switch';
  color='red';
  toggle(val:string){
    this.color=val;
  }

  changecolor(event:Event){
    this.color=(event.target as HTMLInputElement).value;
  }

  getName(name:string){
    console.log(name);
  }
}
