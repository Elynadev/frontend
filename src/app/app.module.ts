import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotelistComponent } from './notelist/notelist.component';
import { NoteComponent } from './note/note.component';
import { NoteSearchComponent } from './note-search/note-search.component';
import { CategoryNoteComponent } from './category-note/category-note.component';

@NgModule({
  declarations: [
    AppComponent,
    NotelistComponent,
    NoteComponent,
    NoteSearchComponent,
    CategoryNoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
