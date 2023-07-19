import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteService } from '../services/note.service';
import { Note } from '../models/note.model';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.scss']
})
export class NoteEditComponent implements OnInit {
  note!: Note;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private noteService: NoteService
  ) {}

  ngOnInit(): void {
    const noteId = this.route.snapshot.paramMap.get('id');
    if (noteId) {
      this.getNoteById(noteId);
    }
  }

  getNoteById(id: string): void {
    this.noteService.getNoteById(id).subscribe(
      (note: Note) => {
        this.note = note;
      },
      (error) => {
        console.error('Failed to fetch note:', error);
      }
    );
  }

  onSubmit(): void {
    this.noteService.updateNote(this.note.id, this.note).subscribe(
      () => {
        console.log('Note updated successfully');
        this.router.navigate(['/notes']);
      },
      (error) => {
        console.error('Failed to update note:', error);
      }
    );
  }

  

  onCancel(): void {
    this.router.navigate(['/notes']);
  }
}
