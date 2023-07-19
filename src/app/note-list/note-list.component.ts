import { Component, OnInit } from '@angular/core';
import { Note } from '../models/note.model'; // Import the Note model if not imported
import { NoteService } from '../services/note.service'; // Import the NoteService

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss'],
})
export class NoteListComponent implements OnInit {
  notes: Note[] = [];

  constructor(private noteService: NoteService) {}

  ngOnInit() {
    this.loadNotes();
  }

  loadNotes() {
    this.noteService.getNotes().subscribe(
      (notes) => {
        this.notes = notes;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  deleteNote(id: string): void {
    this.noteService.deleteNote(id)
      .subscribe(() => {
        this.notes = this.notes.filter(note => note.id !== id);
      });
  }
}
