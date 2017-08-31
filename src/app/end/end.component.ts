import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-end',
  templateUrl: './end.component.html'
})

export class EndComponent implements OnInit {

  mssg = 'Looks like you\'ve reached the end';

  ToTop() {
    $('html, body').animate({ scrollTop: 0 }, 450);
  }

  constructor() { }

  ngOnInit() { }

}
