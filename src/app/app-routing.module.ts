import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteCreateComponent } from './note-create/note-create.component';
import { NoteEditComponent } from './note-edit/note-edit.component';

const routes: Routes = [
  
  { path: '', redirectTo: 'notes', pathMatch: 'full' },
  { path: 'notes', component: NoteListComponent },
  { path: 'notes/create', component: NoteCreateComponent },
  { path: 'notes/edit/:id', component: NoteEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
