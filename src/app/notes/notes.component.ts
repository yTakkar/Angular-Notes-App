import { Component, OnInit } from '@angular/core';
import Notify from 'handy-notification';
import Notes from '../notes.data';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html'
})

export class NotesComponent implements OnInit {

  notes = Notes;

  create: Boolean = false;

  _Toggle(e) {
    this.create = !this.create;
  }

  createNote(e) {
    const
      time = new Date().getTime(),
      { title, content } = e;

    this.notes.unshift({
      id: time,
      time,
      title,
      content
    });

    this.create = false;
    Notify({ value: 'Note Created!!' });
  }

  constructor() { }

  ngOnInit() { }

}
