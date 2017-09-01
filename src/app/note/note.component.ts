import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html'
})

export class NoteComponent implements OnInit {

  @Input() note;
  @Output() onDelete = new EventEmitter();

  viewNote: Boolean = false;

  view_note(e) {
    e.preventDefault();
    this.viewNote = !this.viewNote;
  }

  delete_note(e) {
    this.onDelete.emit(e);
  }

  constructor() { }

  ngOnInit() { }

}
