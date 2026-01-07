import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  a=signal(10);
  b=signal(20);
  c=computed(()=>this.a()+this.b())
  // c=this.a+this.b;

  showValue(){
    // console.log(this.c());
    console.log(this.c());
  }

  updateX(){
    this.a.set(200);
  }

  data:WritableSignal<number>=signal(10);
  counted:Signal<number> =computed(()=>190);

  title = 'signals';

  count = signal(10);
  x = 20;

  updateSignal(){
    // this.data.set("Hello");  
    // this.counted.set(222);
    this.data.update((val)=>val+1)
  }

  constructor() {
    effect(() => {
      console.log(this.count());
    })
  }

  updateValue() {
    this.count.set(this.count() + 1);
    // this.x=30;
    this.x = this.x + 1;
  }

  update(val: string) {
    if (val == 'inc') {
      this.count.set(this.count() + 1)
    }
    else {
      this.count.set(this.count() - 1)
    }

  }
}