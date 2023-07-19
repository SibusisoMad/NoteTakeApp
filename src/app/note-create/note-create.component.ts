import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Note } from '../models/note.model';
import { NoteService } from '../services/note.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-note-create',
  templateUrl: './note-create.component.html',
  styleUrls: ['./note-create.component.scss']
})
export class NoteCreateComponent {
  note: Note = {
    id: '',
    title: '',
    content: '',
    createdByUser: '',
    category: ''
  };

  constructor(private noteService: NoteService, private router: Router) { }

  onSubmit(noteForm: NgForm): void {
    
    if (noteForm.valid) {
      
      this.noteService.createNote(this.note)
        .subscribe(() => {
          noteForm.resetForm();

          this.router.navigate(['/notes']);
        });
    } else {
      
      alert("invalid")
    }
  }
}
