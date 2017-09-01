import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-view-note',
  templateUrl: './view-note.component.html'
})

export class ViewNoteComponent implements OnInit {

  @Input() note;
  @Output() onView = new EventEmitter();
  @Output() onDelete = new EventEmitter();

  doneViewing(e) {
    this.onView.emit(e);
  }

  deleteNote(e) {
    e.preventDefault();
    this.onDelete.emit(this.note.id);
  }

  constructor() { }

  ngOnInit() { }

}
