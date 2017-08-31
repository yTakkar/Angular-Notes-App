import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { NoteComponent } from './note/note.component';
import { NothingComponent } from './nothing/nothing.component';
import { EndComponent } from './end/end.component';
import { CreateNoteComponent } from './create-note/create-note.component';
import { OverlayComponent } from './overlay/overlay.component';
import { TimeagoPipe } from './timeago.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    NoteComponent,
    NothingComponent,
    EndComponent,
    CreateNoteComponent,
    OverlayComponent,
    TimeagoPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
