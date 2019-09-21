import { Component } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
  <p>square works!
  
  {{rando}}
  </p>
  `,
  styles: []
})
export class SquareComponent {
  rando = Math.random();

  constructor() { 
    setInterval( () => this.rando = Math.random() , 500);
  }

}
