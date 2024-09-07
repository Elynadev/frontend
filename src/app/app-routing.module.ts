import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryNoteComponent } from './category-note/category-note.component';
import { NoteComponent } from './note/note.component';
import { NotelistComponent } from './notelist/notelist.component';

const routes: Routes = [
  { path: '', redirectTo: 'notes', pathMatch: 'full' },
  {path:'notes' , component: NoteComponent },
  {path:'Category' , component: CategoryNoteComponent },
  {path:'liste' , component: NotelistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
