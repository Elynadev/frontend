import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrl: './note.component.css'
})
export class NoteComponent {
  @Input() note: Note = { 
    id: '',
    title: '',
    content: '',
    category : '' ,
    createdAt: new Date(),
    updatedAt:new Date(),};
  @Output() noteSaved = new EventEmitter<void>();

  constructor(private noteService: NoteService) {}

  onSubmit() {
    if (!this.note.id) {
      this.note.id = uuidv4();
      this.note.date = new Date();
      this.noteService.addNote(this.note);
    } else {
      this.noteService.updateNote(this.note);
    }
    this.noteSaved.emit();
    this.resetForm();
  }

  resetForm() {
    this.note = { id: '', title: '', content: '', date: new Date() };
  }
}
}
