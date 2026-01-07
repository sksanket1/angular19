import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [NgIf, NgFor, NgSwitch,NgSwitchCase, NgSwitchDefault],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Directives';
  show=true;
  block=0;
  students=["dsda","fsdffsdf","qeweqwe","eqwsdfsdbdf"];

  login=false;
  color="";
  studentsData=[
    {
      name:'Anil',
      age:'29',
      email:'anil@test.com'
    },
    {
      name:'vxcvvvxcx',
      age:'24',
      email:'vxcvvvxcx@test.com'
    },
    {
      name:'Anil',
      age:'29',
      email:'anil@test.com'
    },
    {
      name:'645645eterterte',
      age:'45',
      email:'645645eterterte@test.com'
    },
    {
      name:'Sffsdffasd',
      age:'54',
      email:'Sffsdffasd@test.com'
    }
  ]

  Update(){
    this.block++;
    console.log(this.block);
    if(this.block>2){
      this.block=0;
    }
  }

  UpdateColor(val:string){
    
    this.color=val;
    
  }
}
