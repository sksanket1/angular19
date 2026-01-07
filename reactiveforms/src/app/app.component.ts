import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reactiveforms';
  name = new FormControl();
  password = new FormControl();

  displayValue() {
    console.log(this.name.value);
    console.log(this.password.value);
  }   

  setValue() {
    this.name.setValue('dasdasdas');
    this.password.setValue('123123eqwe');
  }
}