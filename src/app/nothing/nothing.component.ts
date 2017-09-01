import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nothing',
  templateUrl: './nothing.component.html'
})

export class NothingComponent implements OnInit {

  mssg: String = 'No notes for you, go ahead and create one!!';

  constructor() { }

  ngOnInit() { }

}
