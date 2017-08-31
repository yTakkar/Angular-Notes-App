import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html'
})

export class NoteComponent implements OnInit {

  @Input() notes;

  constructor() { }

  ngOnInit() { }

}
