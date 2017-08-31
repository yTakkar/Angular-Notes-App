import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nothing',
  templateUrl: './nothing.component.html'
})

export class NothingComponent implements OnInit {

  mssg = 'Hello, a message for you!!';

  constructor() { }

  ngOnInit() { }

}
