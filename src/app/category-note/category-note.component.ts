import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-category-note',
  templateUrl: './category-note.component.html',
  styleUrl: './category-note.component.css'
})
export class CategoryNoteComponent {
// Input pour recevoir les catégories depuis un parent
@Input() categories: string[] = [];

// Output pour émettre un événement quand une catégorie est sélectionnée
@Output() categorySelected = new EventEmitter<string>();

// Méthode pour émettre l'événement lorsqu'une catégorie est cliquée
onCategorySelect(category: string): void {
  this.categorySelected.emit(category);
}
}
