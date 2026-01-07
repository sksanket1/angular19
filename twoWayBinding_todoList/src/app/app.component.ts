import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'twoWayBinding';
  name = "";
  task = "";
  tasklist: { id: number, task: string }[] = [];

  addTask() {
    this.tasklist.push({ id: this.tasklist.length + 1, task: this.task });
    console.log(this.tasklist);
    this.task='';
  }

  chanageName(val: Event) {
    this.name = (val.target as HTMLInputElement).value;
  }

  deleteTask(id:number){
    this.tasklist=this.tasklist.filter((item)=>item.id!=id);

  }
}
