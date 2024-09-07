import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-notelist',
  templateUrl: './notelist.component.html',
  styleUrl: './notelist.component.css'
})
export class NotelistComponent  implements OnInit  {
  categories = ['Travail', 'Personnel', 'Urgent', 'Idées']; // Exemple de catégories

  // Méthode appelée lorsqu'une catégorie est sélectionnée
  onCategorySelected(category: string): void {
    console.log('Catégorie sélectionnée :', category);
    // Ici, tu peux ajouter la logique pour filtrer les notes par catégorie
  }
    
  notes: Note[] = [];

  constructor(private noteService: NoteService) {}

  ngOnInit(): void {
    this.getNotes();
  }

  getNotes(): void {
    this.noteService.getNotes().subscribe((data: Note[]) => {
      this.notes = data;
    }, error => {
      console.error('Erreur lors de la récupération des notes :', error);
    });
  }
}
