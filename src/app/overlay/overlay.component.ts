import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html'
})

export class OverlayComponent implements OnInit {

  @Input() visible;

  constructor() { }

  ngOnInit() { }

}
