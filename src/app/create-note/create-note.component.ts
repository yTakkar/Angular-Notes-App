import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html'
})

export class CreateNoteComponent implements OnInit {

  @Output() onBack = new EventEmitter();
  @Output() onCreateNote = new EventEmitter();

  _Toggle(e) {
    this.onBack.emit(e);
  }

  createNote(e) {
    e.preventDefault();
    const obj: Object = {
      title: $('.n_title').val(),
      content: $('.n_content').val()
    };
    this.onCreateNote.emit(obj);
  }

  constructor() { }

  ngOnInit() {
    $('.n_title').focus();
  }

}
