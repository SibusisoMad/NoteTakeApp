import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Import NoteService here
import { NoteService } from '../services/note.service';

import { NoteEditComponent } from './note-edit.component';

@NgModule({
  declarations: [NoteEditComponent],
  imports: [CommonModule, FormsModule],
  providers: [NoteService], // Make sure NoteService is added to providers
})
export class NoteModule {}
