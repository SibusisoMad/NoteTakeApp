import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Note } from '../interfaces/note.interface';
import { NoteModel } from '../models/note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(`${this.apiUrl}/Note`);
  }

  createNote(note: Note): Observable<Note> {
    return this.http.post<Note>(`${this.apiUrl}/Note`, note);
  }

  updateNote(id: string, note: Note): Observable<Note> {
    return this.http.put<Note>(`${this.apiUrl}/Note/${id}`, note);
  }

  deleteNote(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/Note/${id}`);
  }
}
