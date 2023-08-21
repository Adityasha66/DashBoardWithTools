import { Component } from '@angular/core';

@Component({
  selector: 'app-newcalander',
  templateUrl: './newcalander.component.html',
  styleUrls: ['./newcalander.component.css']
})
export class NewcalanderComponent {
  selected!: Date | null;

  constructor() {
    setInterval(() => {
      this.selected = new Date()
    }, 10)
  }
}
