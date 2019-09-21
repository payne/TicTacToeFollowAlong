import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button>{{ value }} {{rando}}</button>
  `,
  styles: []
})
export class SquareComponent {

  @Input() value : 'X' | 'O';

  rando = Math.random();

  constructor() { 
    setInterval( () => this.rando = Math.random() , 500);
  }

}
